// Maria Carolina de Oliveira Barbosa 235810 e André Ferreira Gonçalves 223266

async function connect() {
    const mysql = require("mysql2/promise");

    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "usbw",
        database: "rhac1",
        port: "3308",
    });
    console.log("conectou ao bd");
    global.connection = connection;
    return connection;
}

connect();

//todos os cargos
async function getCargos(req, res) {
    const conn = await connect();
    const [cargos] = await conn.query("SELECT * FROM cargo");
    console.log(`Total de cargos retornados: ${cargos.length}`);
    console.log([cargos]);
    res.send([cargos]);
}

//todos os setores
async function getSetores(req, res) {
    const conn = await connect();
    const setores = await conn.query("SELECT * FROM setor");
    console.log(setores[0]);
    res.send(setores[0]);
}

//todos os funcionarios
async function getFuncionarios(req, res) {
    const conn = await connect();
    const funcionarios = await conn.query("SELECT * FROM funcionario");
    console.log(funcionarios[0]);
    res.send(funcionarios[0]);
}

//setor especifico
async function getSetorEspecifico(req, res) {
    const conn = await connect();
    let nome = req.params.nome;
    const setorEspecifico = await conn.query(
        "SELECT * FROM setor WHERE nome = ?",
        [nome]
    );
    res.send(setorEspecifico);
}

//todos funcionário com o parâmetro nome passado por :id;
async function getFuncionarioPorNome(req, res) {
    const conn = await connect();
    const nomeFuncionario = req.params.id;
    const funcionarios = await conn.query(
        "SELECT * FROM funcionario WHERE nome = ?",
        nomeFuncionario
    );
    res.send(funcionarios);
}

//todos funcionários por cargo
async function getFuncionariosPorCargo(req, res) {
    const conn = await connect();
    const cod_cargo = req.params.cod_cargo;
    const funcionariosPorCargo = await conn.query(
        "SELECT * FROM funcionario WHERE cod_cargo = ?",
        cod_cargo
    );
    res.send(funcionariosPorCargo);
}

//Todos os cargos que não possuem funcionário
async function getCargosVazios(req, res) {
    const conn = await connect();
    const cargosVazios = await conn.query(`
            SELECT * FROM cargo WHERE cod_cargo NOT IN (SELECT cod_cargo FROM funcionario)
        `);

    res.send(cargosVazios);
}

//inserir novo funcionario
async function inserirFuncionario(req, res) {
    const conn = await connect();
    const { nome, data_admissao, cod_cargo, cod_setor } = req.body;
    const result = await conn.query(
        "INSERT INTO funcionario (nome, data_admissao, cod_cargo, cod_setor) VALUES (?, ?, ?, ?)",
        [nome, data_admissao, cod_cargo, cod_setor]
    );
    console.log(result);
    res.send(result);
}

//atualizar um funcionario
async function atualizarFuncionario(req, res) {
    const conn = await connect();
    let cod_funcionario = req.params.id;
    const { nome, data_admissao, cod_cargo, cod_setor } = req.body;
    const result = await conn.query(
        "UPDATE funcionario SET nome = ? , data_admissao = ? , cod_cargo = ?, cod_setor = ? WHERE cod_funcionario = ?",
        [nome, data_admissao, cod_cargo, cod_setor, cod_funcionario]
    );
    console.log(result);
    res.send(result);
}

//excluir funcionario
async function excluirFuncionario(req, res) {
    const conn = await connect();
    let cod_funcionario = req.params.id;
    const result = await conn.query(
        "DELETE FROM funcionario WHERE cod_funcionario = ?",
        [cod_funcionario]
    );
    res.send(result);
}

module.exports = {
    getCargos,
    getSetores,
    getFuncionarios,
    getSetorEspecifico,
    getFuncionarioPorNome,
    getFuncionariosPorCargo,
    getCargosVazios,
    inserirFuncionario,
    atualizarFuncionario,
    excluirFuncionario,
};

// método de conexão bd

async function connect() {
    const mysql = require("mysql2/promise");

    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "usbw",
        database: "vendased",
        port: "3308",
    });
    console.log("conectou");
    global.connection = connection;
    return connection;
}

//garantir que inicia automaticamente
connect();

//retorna todos os clientes
async function getClientes(req, res) {
    const conn = await connect();
    const cliente = await conn.query("SELECT * FROM cliente");
    console.log(cliente[0]);
    res.send(cliente[0]);
}

//retorna cliente pelo id
async function getCliente(req, res) {
    const conn = await connect();
    let id = req.params.id;
    const cliente = await conn.query("SELECT * FROM cliente WHERE id = ?", [
        id,
    ]);
    res.send(cliente[0]);
}

//inserir um cliente
async function insertCliente(req, res) {
    const conn = await connect();
    const { nome, email, telefone } = req.body;
    if (!nome || !email)
        return res.status(400).send("Nome e email são obrigatórios");
    const result = await conn.query(
        "INSERT INTO cliente (nome, email, telefone) VALUES (?, ?, ?)",
        [nome, email, telefone]
    );
    console.log(result);
    res.send(result);
}

//atualizar cliente
async function atualizarCliente(req, res) {
    const conn = await connect();
    let id = req.params.id;
    const { nome, email, telefone } = req.body;
    const result = await conn.query(
        "UPDATE cliente SET nome = ?, email = ?, telefone = ? WHERE id = ?",
        [nome, email, telefone, id]
    );
    res.send(result);
}

async function excluirCliente(req, res) {
    const id = req.params.id;
    console.log("Tentando excluir cliente com ID:", id);

    const conn = await connect();
    const result = await conn.query("DELETE FROM cliente WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
        return res.status(404).send("Cliente não encontrado");
    }

    res.send({ message: "Cliente excluído com sucesso!" });
}

module.exports = {
    getClientes,
    getCliente,
    insertCliente,
    atualizarCliente,
    excluirCliente,
};

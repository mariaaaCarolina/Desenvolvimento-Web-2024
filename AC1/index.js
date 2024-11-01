// Maria Carolina de Oliveira Barbosa 235810 e André Ferreira Gonçalves 223266

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.text());

const ac1 = require("./AC1/ac1");

app.get("/cargos", ac1.getCargos); //http://localhost:3200/cargos
app.get("/setores", ac1.getSetores); //http://localhost:3200/setores
app.get("/funcionarios", ac1.getFuncionarios); ///http://localhost:3200/funcionarios
app.get("/setorEspecifico/:nome", ac1.getSetorEspecifico); //http://localhost:3200/setorEspecifico/financeiro
app.get("/funcionarioPorNome/:id", ac1.getFuncionarioPorNome); //http://localhost:3200/funcionarioPorNome/maria%20oliveira
app.get("/funcionariosPorCargo/:cod_cargo", ac1.getFuncionariosPorCargo); //http://localhost:3200/funcionariosPorCargo/5
app.get("/cargos/vazios", ac1.getCargosVazios); //http://localhost:3200/cargos/vazios
app.post("/inserirFuncionario", ac1.inserirFuncionario); //localhost:3200/inserirFuncionario
app.put("/atualizarFuncionario/:id", ac1.atualizarFuncionario); //localhost:3200/atualizarFuncionario/22
app.delete("/excluirFuncionario/:id", ac1.excluirFuncionario); //localhost:3200/excluirFuncionario/22

//////
app.listen(3200, () => {
    console.log("Servidor rodando na porta 3200");
});

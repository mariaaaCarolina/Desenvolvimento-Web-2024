const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.text());

//conexão com o banco de dados
const cliente = require("./aula04/clientes");

//configurar o CORS
const cors = require("cors");
app.use(cors());

//retornar todos os clientes
app.get("/clientes", cliente.getClientes);

//retornar cliente pelo id
app.get("/clientes/:id", cliente.getCliente);

//inserindo um cliente
app.post("/postcliente", cliente.insertCliente);

//atualizando um cliente
app.put("/putclientes/:id", cliente.atualizarCliente);

//excluindo um cliente
app.delete("/excluirclientes/:id", cliente.excluirCliente);

///////////////////////////////////////////////////////////////////
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser') 
const port = 3100;
/////////////////////////////////////////////////////////////////////////

app.use(bodyParser.json())

//simulando um banco de dados

let alunos = [
    {id: 1, nome: 'Maria', idade: 19},
    {id: 2, nome: 'Geovanna', idade: 12},
    {id: 3, nome: 'Lucas', idade: 20}
]

//retornando todos os alunos - GET
app.get('/alunos', (req, res) => {
    res.json(alunos)
})

//retornando aluno pelo id - GET
app.get('/alunos/:id', (req, res) => {
    let id = req.params.id
    let aluno = alunos.find(aluno => aluno.id == id) 
    if(aluno){
        res.json(aluno)
    } else{
        res.status(404).send('Aluno não encontrado')
    }
})

//inserindo aluno - POST
app.post('/alunos', (req, res) => {
    let aluno = req.body
    aluno.id = alunos.length + 1
    alunos.push(aluno)
    res.status(201).json(aluno)
})

//atualizando aluno - PUT
app.put('/alunos/:id', (req, res) => {
    let id = req.params.id
    let aluno = req.body
    let index = alunos.findIndex(aluno => aluno.id == id)
    if(index >= 0){
        alunos[index] = aluno
        res.json(aluno)
    } else {
        res.status(404).send('Aluno não encontrado')
    }
})

//deletando aluno - DELETE
app.delete('/alunos/:id', (req, res) => {
    let id = req.params.id
    let index = alunos.findIndex(aluno => aluno.id == id)
    if(index >= 0){
        alunos.splice(index, 1)
        res.status(204).send('Excluido com sucesso')
    } else {
        res.status(404).send('Aluno não encontrado')
    }
})

/////////////////////////////////////////////////////////////////////////
//escutador de porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

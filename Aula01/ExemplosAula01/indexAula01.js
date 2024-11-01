const express = require('express'); //trazer recursos do node_modules ou de outro modulo
const app = express()

//requisições usando o use possuem regras de hierarquia
app.use('/alunos', (req, res,  next) => { //função de callback(arrow function)
    // res.send('agora eu mudei o caminho')
    console.log("testando");
    next();
})

//exemplo de chamada de requisições http

app.get('/exemploGet', (req,res) =>{
    res.send('Exemplo Get')
})

app.post('/exemploPost', (req,res) =>{
    res.send('Exemplo Post')
})

app.all('/exemploAll', (req,res) =>{
    res.send('Exemplo All')
})

// app.use((req, res) => {
//     res.send('<h1>Aula 02 de Node.js</h1><br></br><br></br><br></br>')
// })

// app.use((req, res) => {
//     res.send("Hello World") //front
//     console.log("backend"); //back
// })


//retornando um json para o fronend
app.get('/exemploJson', (req, res) => {
    res.json(
        {
            nome: 'Carol',
            idade: 19,
            endereco: {
                rua: 'Rua 01',
                numero: 123,
                bairro: "Bairro 03"
            }
        }    
    )
})

//usando middleware
const lista01 = require('./lista01')

app.get('/ola', (req, res) => {
    res.send(lista01.ola())
})

app.get('/ex01', (req, res) => {
    res.send(lista01.exercicio01('Carol'))
})

app.get('/ex02/:nome', (req, res) => {
    let nome = req.params.nome
    res.send(lista01.exercicio01(nome))
})

app.get('/divisao/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    res.send(lista01.divisao(num1, num2).toString())
})

app.get('/divisaoQuery'), (req, res) => { // http://localhost:3000/divisaoQuery?num1=100&num2=4
    let num1 = req.query.num1
    let num2 = req.query.num2
    res.send(lista01.divisao(num1, num2).toString())
}

app.listen(3000, () => { // escutar uma porta
    console.log('Servidor está executando na porta 3000');
})


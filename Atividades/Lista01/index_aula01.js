const express = require('express');
const app = express();
const port = 3000;
/////////////////////////////////////////////////////////////////////////

//01
const contarVogais = require('./Atividades/Lista01/01');
app.get('/contarVogais/:palavra', (req, res) => { // http://localhost:3000/contarVogais/beterraba
    let palavra = req.params.palavra;

    let numeroDeVogais = contarVogais(palavra);
    res.send(`A palavra "${palavra}" tem ${numeroDeVogais} vogais.`);
});

/////////////////////////////////////////////////////////////////////////
//02
const contagemMontante = require('./Atividades/Lista01/02');
app.get('/calcularMontante/:capital/:taxa/:tempo', (req, res) => { //http://localhost:3000/calcularMontante/20000/2/5
    let { capital, taxa, tempo } = req.params;

    let capitalInicial = parseFloat(capital);
    let taxaJuros = parseFloat(taxa);
    let meses = parseInt(tempo, 10);

    let montante = contagemMontante(capitalInicial, taxaJuros, meses);
    res.send(`O montante depois de ${meses} meses é de R$ ${montante}`);
});

/////////////////////////////////////////////////////////////////////////
//03
const contarCaractere = require('./Atividades/Lista01/03');
app.get('/contarCaractere/:string/:char', (req, res) => { //http://localhost:3000/contarCaractere/maria/a
    const { string, char } = req.params;
    const contagem = contarCaractere(string, char);
    
    res.send(`Esse caractere: "${char}" aparece ${contagem} vezes na palavra "${string}".`);
});

/////////////////////////////////////////////////////////////////////////
//04
const bissexto = require('./Atividades/Lista01/04');
app.get('/bissexto/:ano', (req, res) => { // http://localhost:3000/bissexto/2023
    let { ano } = req.params;

    let anoNumero = parseInt(ano, 10);
    let resultado = bissexto(anoNumero);

    if (resultado) {
        res.send(`O ano ${anoNumero} é bissexto.`);
    } else {
        res.send(`O ano ${anoNumero} não é bissexto.`);
    }
});

/////////////////////////////////////////////////////////////////////////
//05
const minimoEmaximo = require('./Atividades/Lista01/05');
app.get('/minimoEmaximo/:numeros', (req, res) => { //http://localhost:3000/minimoEmaximo/10,1,66,3,1

    const numeros = req.params.numeros ? req.params.numeros.split(',').map(Number) : [];
    const resultado = minimoEmaximo(numeros);
    
    res.send(resultado);
});
/////////////////////////////////////////////////////////////////////////
//06
const simulador = require('./Atividades/Lista01/06');
app.get('/loteria/:numerosEscolhidos', (req, res) => { //http://localhost:3000/loteria/60,22,15,10,7,11
    const numerosEscolhidos = req.params.numerosEscolhidos ? req.params.numerosEscolhidos.split(',').map(Number) : [];

    const resultado = simulador(numerosEscolhidos);
    
    res.send(resultado);
});

/////////////////////////////////////////////////////////////////////////
//escutador de porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

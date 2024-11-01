// 2.	Escreva uma função que informe o retorno de um investimento (montante) 
// com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
// fornecidos pelo usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// 	C = Capital inicial investido
// 	i = Taxa de juros, em percentual
// 	t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.


// montante.js

function calcularMontante(capitalInicial, taxaJuros, meses) {
    let i = taxaJuros / 100;
    let montante = capitalInicial * Math.pow((1 + i), meses);
    return montante.toFixed(2);
}

module.exports = calcularMontante;

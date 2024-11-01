// 4.	Escreva uma função que recebe um ano e retorna uma mensagem 
// dizendo se é bissexto ou não.

function bissexto(ano) {
    // Um ano é bissexto se for divisível por 4
    // Mas não é bissexto se for divisível por 100, exceto se for também divisível por 400
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

module.exports = bissexto;
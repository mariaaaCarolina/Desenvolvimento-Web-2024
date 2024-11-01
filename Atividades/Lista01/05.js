// 5.	Escreva uma função que recebe um array de números e retorna 
// uma mensagem dizendo qual é o menor e o maior número.

function minimoEmaximo(numeros) {
    let min = numeros[0];
    let max = numeros[0];

    for (let num of numeros) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return `O menor número é ${min} e o maior número é ${max}.`;
}

module.exports = minimoEmaximo;

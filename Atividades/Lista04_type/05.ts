//Crie uma função que receba um array de números e retorne o maior valor
function maiorValor(array: number[]): number {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

console.log(maiorValor([3, 5, 7, 2, 8]));

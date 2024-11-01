// 1.	Escreva uma função que permita contar o número de vogais contidas 
// em uma string fornecida pelo usuário. Por exemplo, o usuário informa 
// a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

function contarVogais(str) {
    const vogais = 'aAeEiIoOuU';
    let contador = 0;

    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

module.exports = contarVogais;
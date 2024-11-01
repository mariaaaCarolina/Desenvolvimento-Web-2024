// 3.	Escreva uma função em JavaScript que conte quantas vezes um caractere 
// aparece em uma string. Tanto o caractere quanto a string devem ser 
// fornecidos pelo usuário.

// contarCaractere.js

function contarCaractere(str, char) {
    let contador = 0;

    for (let c of str) {
        if (c === char) {
            contador++;
        }
    }

    return contador;
}

module.exports = contarCaractere;

//Crie uma função que receba um parâmetro que pode ser uma string ou um número e
//retorne o tamanho (se for string) ou o dobro do valor (se for número).
function StringOuNumber(valor: string | number) {
    if (typeof valor === "string") {
        return valor.length;
    } else if (typeof valor === "number") {
        return valor * 2;
    }
}

console.log(StringOuNumber("maria carolina"));
console.log(StringOuNumber(19));

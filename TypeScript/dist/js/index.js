"use strict";
let nome = "Carol";
nome = "Maria";
let numero1 = 10;
let valido = true;
let nome1 = "Carol";
let numero2 = 19;
let valido1 = true;
console.log(nome, nome1);
let frutas = ["maçã", "banana", "uva"];
let numeros = [1, 2, 3];
console.log(frutas.length);
console.log(frutas[0].toLocaleUpperCase());
let teste = ["Carol", 37, true];
let carro = {
    nome: "Civic",
    ano: 2019,
    preco: 90000,
};
console.log(carro);
console.log(carro.nome);
carro = {
    nome: "Corolla",
    ano: 2020,
    preco: 100000,
};
let valor = 10;
valor = "Carol";
valor = true;
let valor1;
valor1 = 10;
valor1 = "Carol";
let idUsuario;
idUsuario = 10;
idUsuario = "Carol";
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
let camisa = {
    nome: "Polo",
    tamanho: size.M,
};
console.log(camisa);
function soma(a, b) {
    return a + b;
}
console.log("Resultado: " + soma(10, 20));
function subtracao(a, b) {
    return b ? "Resultado: " + (a - b) : "Informe o segundo valor";
}
console.log(subtracao(10));
console.log(subtracao(10, 5));
let x = { a: 10, b: 20 };
function multiplicacao(numeros) {
    return numeros.a * numeros.b;
}
console.log("Resultado: " + multiplicacao(x));
console.log("Resultado2: " + multiplicacao({ a: 2, b: 3 }));
class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    exibir() {
        return `Nome: ${this.nome} - Idade: ${this.idade}`;
    }
    falar() {
        return `Meu nome é ${this.nome}`;
    }
}
let pessoa = new Pessoa("Carol", 19, "235810@facens.br");
console.log(pessoa.exibir());
console.log(pessoa.falar());

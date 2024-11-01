//Crie uma classe Animal com um método falar. Depois crie uma classe Cachorro que
//herda de Animal e sobrescreva o método falar para imprimir "Au Au"
interface IAnimal {
    nome: string;
    raca: string;
    falar(): string;
    exibir(): string;
}

class Cachorro implements IAnimal {
    nome: string;
    raca: string;
    constructor(nome: string, raca: string) {
        this.nome = nome;
        this.raca = raca;
    }
    falar() {
        return `Au Au`;
    }
    exibir() {
        return `Ela é a ${this.nome} e é uma ${this.raca}`;
    }
}
let cachorro = new Cachorro("Meggy", "Golden Retriever");
console.log(cachorro.falar());
console.log(cachorro.exibir());

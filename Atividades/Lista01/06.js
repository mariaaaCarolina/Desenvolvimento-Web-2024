// 6.	Escreva uma função que simule uma loteria, onde o usuário escolhe 6 números 
// e o programa sorteia 6 números aleatórios, verificando quantos números o
// usuário acertou.

// Atividades/Lista01/06.js

function simulador(numerosEscolhidos) {
    if (numerosEscolhidos.length !== 6) {
        return 'Você deve escolher exatamente 6 números.';
    }

    const numerosEscolhidosSet = new Set(numerosEscolhidos);
    if (numerosEscolhidosSet.size !== 6 || !numerosEscolhidos.every(num => num >= 1 && num <= 60)) {
        return 'Os números escolhidos devem ser únicos e estar entre 1 e 60.';
    }
    
    const sorteio = new Set();
    while (sorteio.size < 6) {
        sorteio.add(Math.floor(Math.random() * 60) + 1);
    }

    const numerosSorteados = Array.from(sorteio);
    console.log('Números sorteados:', numerosSorteados);

    const acertos = numerosEscolhidos.filter(num => numerosSorteados.includes(num)).length;
    console.log('Número de acertos:', acertos);

    return `Números sorteados: ${numerosSorteados.join(', ')}. Você acertou ${acertos} números.`;
}

module.exports = simulador;

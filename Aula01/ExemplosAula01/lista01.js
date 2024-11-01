function ola(){
    return "ola"
}

function exercicio01(nome){
    return `ola, ${nome}`
}

function divisao(num1, num2){
    if(num2 == 0){
        return "não é possivel"
    } else{
        return num1 / num2
    }
}

module.exports = {ola, exercicio01, divisao}; //expor 
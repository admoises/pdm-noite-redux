//  arrow function
// nome: criarContrato()
// recebe nome e valor
// ddevolve um json com type = CRIAR_CONTRATO e payload igual a um json com nome e valor

const criarContrato = (nome, valor) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {nome, valor}
    }
}

//function regular (usar function)
//cancelarContrato
//recebe nome
// devolve um Json com type = CANCELAR_CONTRATO e payload iagual a um jason com nome

function cancelarContrato(nome) {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {nome}
    }
}

//criar uma funçao criadora de ação para solicitações de cash back

const solicitarCashBack = (nome, valor) => {
    return{
        type: "SOLICITAR_CASHBACK",
        payload: {nome, valor}
    }
}
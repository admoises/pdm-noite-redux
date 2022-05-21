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

//arrow function
//historicoDePedidosCashbackReducer
//recebe uma fatia de estado sob o qual operar (uma lista chamada historicoDePedidosCashback, por padrão ela é uma lista vazia)
//recebe uma ação
//devolve uma lista que contém todos os pedidos da lista recebido e o pedido descrito no payload da ação
//detalhe: somente operar o estado se o type for apropriado
//detalhe2: obrigatório usar o spread (...)


const historicoDePedidosCashbackReducer = (historicoDePedidosCashback = [], acao) => {
    return acao.type === "SOLICITAR_CASHBACK" ? [...historicoDePedidosCashback, acao.payload] : historicoDePedidosCashback
}

//implementar reducer que opera o caixa

const operaCaixaReducer = (caixa = 0, acao) => {
    if (acao.type === "CRIAR_CONTRATO") {
        return caixa + acao.payload.valor;
    }
    else if (acao.type === "SOLICITAR_CASHBACK") {
        return caixa - acao.payload.valor;
    }
    return valor;
}

//implementar reducer que lida com alista de contratos
//ele pode criar contratos e cancelar contrator

const contratosReducer = (listaDeContratosAtual = [], acao) => {
    if (acao.type === "CRIAR_CONTRATO") {
        return [...listaDeContratosAtual, acao.payload]
    }
    if ( acao.type === "CANCELAR_CONTRATO") {
        return listaDeContratosAtual.filter((contrato) => {contrato.nome !== acao.payload.nome})
    }
    return listaDeContratosAtual;
}
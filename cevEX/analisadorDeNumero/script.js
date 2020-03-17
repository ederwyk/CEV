let numeros = new Set()

function adicionar() {
    let numero = document.getElementById("numero").value

    if(!isValido(numero)) {
        return
    }

    numeros.add(numero)

    let adicionados = document.getElementById("adicionados")
    adicionados.innerHTML += `Adicionado ${numero} na lista <br>`

}

function isValido(numero) {
    if(!numero){
        window.alert("Número inválido")
        return false
    } else if(numero < 1 || numero > 100) {
        window.alert("Número deve estar entre 1 e 100")
        return false
    } else if(numeros.has(numero)) {
        window.alert("Numero já adicionado")
        return false
    }

    return true
}

function analisar() {
    
    let tamanho = numeros.size

    if(tamanho === 0) {
        window.alert("Lista vazia")
        return
    }

    let analise = document.getElementById("analise")
    analise.innerHTML = ""


    analise.innerHTML += `Foram inseridos ${tamanho} numeros <br>`

    let maior = 0
    numeros.forEach(numero => {if(maior < Number(numero)) maior = numero})
    analise.innerHTML += `O maior numero é ${maior} <br>`

    let menor = 100
    numeros.forEach(numero => {if(menor > Number(numero)) menor = numero})
    analise.innerHTML += `O menor numero é ${menor} <br>`
    
    let soma = 0
    numeros.forEach(numero => soma += Number(numero))
    let media = soma/numeros.size
    analise.innerHTML += `A média dos numeros é ${media} <br>`

}
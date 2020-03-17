function contar(){
    let inicio = document.getElementById("inicio").value
    let fim = document.getElementById("fim").value
    let passo = document.getElementById("passo").value
    let divResultado = document.getElementById("resultado")

    if(!inicio || !fim || !passo){
        divResultado.innerHTML = "Calculando o resultado..."
        return
    }

    divResultado.innerHTML = "Resultado = "
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    for (let index = inicio; index < fim; index += passo) {
        divResultado.innerHTML += ("\u{1F449}" + index + ", ")
    }
    
    divResultado.innerHTML += fim
}
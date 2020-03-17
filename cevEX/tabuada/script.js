function calcular() {
    let numero = document.getElementById("numero").value
    let divResultado = document.getElementById("resultado")
    
    if(numero){
        numero = Number(numero)

        divResultado.innerHTML = ""

        for (let index = 1; index <= 10; index++) {
            divResultado.innerHTML += (numero + ` x ` + index + ` = ` + (numero * index) + `<br>`)
            
        }
    }
}
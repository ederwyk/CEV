let dataAtual = new Date()
let dataNascimentoInput = document.getElementById("dataNascimento")
let resposta = document.getElementById("resposta")

function verificar() {
    let sexoRadio = document.getElementsByName("sexo")
    let sexo = "não informado"

    sexoRadio.forEach(element => {
        if(element.checked) sexo = element.id
    });

    if (!validaData()) {
        return
    }

    let dataNascimento = new Date(dataNascimentoInput.value)
    let fezAniversarioNoAno = dataNascimento.getMonth() <= dataAtual.getMonth() && dataNascimento.getDay() <= dataAtual.getDay()
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear()
    if(!fezAniversarioNoAno) idade--
    resposta.innerText = `Idade: ${idade}, sexo: ${sexo}`
}

function validaData() {
    if(!dataNascimentoInput || !dataNascimentoInput.value || !new Date(dataNascimentoInput.value)) {
        resposta.innerText = "Informe a data de nascimento corretamente"
        return false
    }

    if(new Date(dataNascimentoInput.value) > new Date()) {
        resposta.innerText = "Nasceu no futuro?"
        return false
    }

    return true
}
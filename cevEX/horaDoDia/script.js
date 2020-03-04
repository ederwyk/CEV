let dataAtual = new Date()
let horaAtual = dataAtual.getHours()

let texto = document.getElementById('texto')
texto.innerText = `Agora são ${horaAtual} horas`

let foto = document.getElementById('foto')
if(horaAtual >= 5 && horaAtual <= 12) {
    foto.src = 'morning.jpg'
    foto.alt = 'Manhã'
} else if(horaAtual >= 13 && horaAtual <= 18) {
    foto.src = 'afternoon.jpg'
    foto.alt = 'Tarde'
} else {
    foto.src = 'night.png'
    foto.alt = 'Noite'
}
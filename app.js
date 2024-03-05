let btnElem = document.getElementById('change-quote-btn');
let quoteElem = document.getElementById('quote');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambiarCita() {
    let index = generarEnteroAleatorio(0, citas.length - 1);
    let cita = citas[index];
    quoteElem.textContent = cita.cita;
    autorElem.textContent = cita.autor;
}

btnElem.addEventListener('click', cambiarCita);
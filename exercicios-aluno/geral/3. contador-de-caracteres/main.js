const texto = document.getElementById('texto');
const contador = document.getElementById('contador');

function contadorDP() {
contador.innerText = texto.value.length;
}

texto.addEventListener('input', contadorDP);
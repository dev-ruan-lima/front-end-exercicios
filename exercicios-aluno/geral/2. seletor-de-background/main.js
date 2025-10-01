const btn = document.getElementById('btn');
const btnDois = document.getElementById('btn-dois');

btn.addEventListener('click', trocarfundo)
btnDois.addEventListener('click', trocarfundo)

function trocarfundo (event){
    if (event.target === btn){
        document.body.style.backgroundColor = '#fff';
    } else if (event.target === btnDois){
        document.body.style.backgroundColor = '#000';
}

}
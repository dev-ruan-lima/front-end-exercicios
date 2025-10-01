const validacao = document.getElementById('btn');
const campo = document.getElementById('senha');

validacao.addEventListener('click' , validar);

function validar(){
    if(senha.value === "")
    alert('campo vazio');
    else
    alert('campo preenchido')

}
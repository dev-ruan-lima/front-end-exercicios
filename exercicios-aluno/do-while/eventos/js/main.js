const botao = document.getElementById('btn-adicionar');
const input = document.getElementById('nome-pessoa');

botao.addEventListener('click', addItem);


function addItem(){
    let item = input.value;
	input.value = ''; 
	input.focus();
}
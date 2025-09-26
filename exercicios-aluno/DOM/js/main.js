let cortico = document.getElementById('o-cortico');
console.log(cortico);

let objetosA = document.getElementsByTagName('a');
console.log(objetosA);

let vidaSeca = document.querySelector('#vidas-secas');
console.log(vidaSeca);

let navList = document.querySelector('.footer-links .nav-list');
console.log(navList);

let Navlist = document.querySelector('.header .nav-list');
console.log(Navlist);

cortico.style.color = '#993300';

vidaSeca.className = 'card-livro-fora-de-estoque';

navList.style.backgroundColor = 'red';

let capalivroUm = document.querySelector('.capa-livro');
capalivroUm.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/02024_2107_Micherdzi%C5%84ski_tenement_house.jpg/640px-02024_2107_Micherdzi%C5%84ski_tenement_house.jpg');

let novoParagrafo = document.createElement('p');

novoParagrafo.textContent = 'Clarice Lispector';

let tituloLivro3 = document.querySelector('#dom-casmuro .titulo-livro');

tituloLivro3.after(novoParagrafo);
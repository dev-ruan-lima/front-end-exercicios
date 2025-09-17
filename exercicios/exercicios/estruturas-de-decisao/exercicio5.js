let experiencia = prompt("insira sua experiencia:");
let pontuacao = 0;

if (experiencia < 5) {
    pontuacao = pontuacao + 10;
} else if (experiencia >=5){
    pontuacao = pontuacao + 20;
}

let formacao = prompt("insira sua formacao:");

if (formacao == 'superior') {
    pontuacao += 10;
} else if (formacao == 'pos-graduacao') {
    pontuacao += 20;
} else if (formacao == 'mestrado') {
    pontuacao += 30;
} else if (formacao == 'doutorado') {
    pontuacao += 40;
}

alert('sua pontuação é de: ' + pontuacao);
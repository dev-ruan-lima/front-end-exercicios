let Renda = prompt("insira sua renda:");
let pontuacao = 0;

if (Renda <= 2000) {
    pontuacao = pontuacao + 30;
} else if (Renda >= 2001 && Renda <= 4000) {
    pontuacao = pontuacao + 20;
} else if (Renda > 4000) {
    pontuacao = pontuacao + 10;
}

let media = prompt("insira sua media academica :");

if (media <= 5.9) {
    pontuacao + 5;
} else if (media >= 7.0 && media <= 8.4) {
    pontuacao + 15;
} else if (media >= 8.5 && media <= 10) {
    pontuacao + 25;
}

alert('sua pontuação é de: ' + pontuacao);
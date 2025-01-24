alert("Boas vindas ao jogo do numero secreto!");
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 10");

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai vc descobriu numero secreto ${numeroSecreto}`);
} else {
    alert("Errrrou :(")
}
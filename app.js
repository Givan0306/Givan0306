alert("Boas vindas ao jogo do numero secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não fo igual ao n. secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e 10");
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero é menor que ${chute}`);
        } else {
            alert(`O numero é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Isso ai vc descobriu numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai vc descobriu numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}

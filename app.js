alert("Boas vindas ao jogo do numero secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute 

//enquanto chute não fo igual ao n. secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e 10");
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai vc descobriu numero secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero é menor que ${chute}`);
        } else {
            alert(`O numero é maior que ${chute}`);
        }
    }
}
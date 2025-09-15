alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;

console.log(numeroSecreto)
let opcao = prompt('Escolha um número de 1 até 10:');

if (opcao == numeroSecreto) {
    alert(`Parabéns, você decobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Resposta Incorreta!')
}
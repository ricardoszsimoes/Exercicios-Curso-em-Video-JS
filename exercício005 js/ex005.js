window.alert('Que bom que você veio ao meu site!');

function clicou() {
    var resultado = window.prompt('Digite um número:');
    document.getElementById("resultado").innerHTML = (`O dobro de <strong>${resultado}</strong> é <strong>${resultado * 2}</strong> e a metade é <strong>${resultado / 2}</strong>!`);
}
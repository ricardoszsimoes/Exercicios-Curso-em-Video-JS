function clicou() {
    var num1 = Number(prompt('Primeiro valor:'));
    var num2 = Number(prompt('Segundo valor:'));
    var ari = prompt(`Valores informados: ${num1} e ${num2}.<br>O que vamos fazer?<[1] Somar<br>[2] Subtrair<br>[3] Multiplicar<br> [4] Dividir`)
    
    if (ari = 1) {
        var conta = num1 + num2;
        res.innerHTML = `<p>${conta}</p>`
    } else if (ari = 2) {
        var conta  = num1 - num2;
        res.innerHTML = `<p>${conta}</p>`
    }
}
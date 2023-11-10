function clicou() {
    var num1 = Number(prompt('Primeiro valor:'));
    var num2 = Number(prompt('Segundo valor:'));
    var ari = prompt(`Valores informados: ${num1} e ${num2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`)
    
    res.innerHTML = `<h2>Calculando...</h2>`

    if (ari == 1) {
        var conta = num1 + num2;
        res.innerHTML += `<p>${num1} + ${num2} = ${conta}</p>`
    } else if (ari == 2) {
        var conta = num1 - num2;
        res.innerHTML += `<p>${num1} - ${num2} = ${conta}</p>`
    } else if (ari == 3) {
        var conta = num1 * num2;
        res.innerHTML += `<p>${num1} x ${num2} = ${conta}</p>`
    } else if (ari == 4) {
        var conta = num1 / num2;
        res.innerHTML += `<p>${num1} / ${num2} = ${conta}</p>`
    }
}
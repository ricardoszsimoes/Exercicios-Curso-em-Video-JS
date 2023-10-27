document.querySelector('div#result')

function clicou() {
    var num1 = prompt('Digite um número:');
    var num2 = prompt('Digite outro número:');

    if (num1 > num2) {
        var res = num1;
        result.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${res}</strong>!</p>`
    } else if (num1 < num2) {
        var res = num2;
        result.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${res}</strong>!</p>`
    } else {
        var igual =  'igual';
        result.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o valor é <strong>${igual}</strong>!</p>`
    }
}
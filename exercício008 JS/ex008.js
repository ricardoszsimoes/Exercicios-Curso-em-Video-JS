querySelector("p#result", clicou);

function clicou() {
    var num = prompt('Digite um número:');    
    result.innerHTML = 
    (`O número a ser analisado aqui será o <strong>${num}</strong><hr />
    O seu valor absoluto é ${num} <br>
    A sua inteira é ${num} <br>
    O valor inteiro mais próximo é ${num} <br>
    A sua raiz quadrada é ${Math.sqrt(num)} <br>
    A sua raiz cúbica é ${Math.cbrt(num)} <br>
    O valor de ${num}² é ${num ** 2}</br>
    O valor de ${num}³ é ${num ** 3}</br>
    `)
}
function contou() {
    var number = document.getElementById('num').value;
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    
    if (number >= 0) {
        res.innerHTML += `<h3>Contando de 0 até ${number}</h3>`
        for (var n = 0; n <= number; n++){        
            res.innerHTML += `${n} ` + '👉'
        }
        res.innerHTML += '🏁';
    } else {
        alert('Insira um número positivo')                 
        }
}    

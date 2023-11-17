function contou() {
    var num1 = document.getElementById('txti').value;
    var num2 = document.getElementById('txtf').value;
    var res = document.querySelector('div#res');

    res.innerHTML = '';

    if(num1 < num2) {
        // contagem crescente
        for(var n = num1; n <= num2; n++) {
            res.innerHTML += `${n} ` + '👉'            
        }
        res.innerHTML += '🏁';
    } else if(num1 > num2) {
        // contagem regressiva
        for(var n = num1; n >= num2; n--) {
            res.innerHTML += `${n} ` + '👉'            
        }
        res.innerHTML += '🏁';
    } else {
        alert('[ERROR] Não é possível contar, pois os números são iguais')
    }
    
   }
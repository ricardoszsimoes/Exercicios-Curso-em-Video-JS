function clicou() {
    var res = document.querySelector('div#res')
    res.innerHTML = 'Números pares de 1 até 10<br>'

    for (var n = 1 ; n <= 10; n++) {
        par = n % 2;
        if (par == 0) {
            res.innerHTML += `${n}` + '👉'
        } else {
            res.innerHTML += ``
        }
    }
    
    res.innerHTML += `🏁`     
}
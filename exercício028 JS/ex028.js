function fatorial() {
    let num = document.getElementById('num').value;
    let res = document.querySelector('div#res');

    res.innerHTML = '';

    if (num.length == 0 || num < 1 || num > 21) {
        alert('Por favor, digite um número válido!');
    } else {
        let f = 1
        let eta = '';

        for(let c = num; c > 1; c--) {
            f *= c;
            eta += c + ' x ';             
        }
        eta += '1 = ' + f;
        res.innerHTML += eta;
    }
}
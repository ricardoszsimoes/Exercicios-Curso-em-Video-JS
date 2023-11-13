function clicou() {
    var res = document.querySelector('div#res')
    res.innerHTML = '<p>Contando de 1 até  10, marcando os pares</p>'

    for (var n = 1; n <= 10; n++) {
        var resto = n % 2;
            if (resto == 0) {
                res.innerHTML += `<mark>${n}</mark>` + '👉'
            } else {
                res.innerHTML += `${n}` + '👉'
            }
        }
        res.innerHTML += `🏁`
}
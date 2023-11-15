function clicou() {
    var res = document.querySelector('div#res')
    res.innerHTML = '<h3>Contagem Regressiva de 10 a 1</h3>'
    for(var n = 10; n >= 1; n--) {
        res.innerHTML += `${n} ` + '👉'
    }
     
}
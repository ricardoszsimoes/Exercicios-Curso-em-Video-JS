function clicou() {
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Contando de 1 até 10...`
    for (var n = 1; n <= 10; n++)        
    res.innerHTML += `${n}` + '👉'
    res.innerHTML += `🏁`
}
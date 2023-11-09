function clicou() {
    let num = Number(prompt('Qual é o seu palpite?'));
    let numAle = Math.floor(Math.random() * 100);
    var res = document.querySelector('div#res')
    
    if (num > numAle) {
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR!</strong></p>`
    } else if (num < numAle) {
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MAIOR!</strong></p>`
    } else if (num === numAle) {
        res.innerHTML += `<p>Você falou ${num}. <strong>Parabéns você acertou!</strong></p>`
    
    }
    
}
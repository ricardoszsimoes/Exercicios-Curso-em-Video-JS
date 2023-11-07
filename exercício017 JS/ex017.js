function clicou() {
   let numAle = Math.floor(Math.random() * 100);
   res.innerHTML += `<p>Acabei de pensar no número <mark>${numAle}</mark>!</p>` 
}

function limpou() {
    res.innerHTML = '';
}
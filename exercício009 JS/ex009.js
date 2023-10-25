let contador = 0;
let res = document.querySelector('section#result');


function clicou(){
    contador ++;
    res.innerHTML = (`O contador está com <mark>${contador}</mark> cliques.`);
}

function zerou(){
    contador = 0;
    res.innerHTML = (`O contador está com <mark>${contador}</mark> cliques.`);
}

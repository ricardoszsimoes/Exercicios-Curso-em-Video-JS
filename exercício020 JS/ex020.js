function clicou() {
    var mes = prompt('Digite o mês em extenso (ex: Setembro)');
    var res =  document.querySelector('div#res');
    
    mes = mes.toLowerCase(); // Retorna o valor da string original convertido para minúsculo. 

    if (mes === 'dezembro' || mes === 'janeiro' || mes === 'fevereiro') {
        res.innerHTML = `No mês <mark>${mes}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.`;
    } else if (mes === 'março' || mes === 'maio' || mes === 'junho') {
        res.innerHTML = `No mês <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.`;
   } else if (mes === 'julho' || mes === 'agosto' || mes === 'setembro') {
        res.innerHTML = `No mês <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.`;
   } else if (mes === 'outubro' || mes === 'novembro' ) {
        res.innerHTML = `No mês <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark>.`;
   }
}
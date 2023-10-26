function clicou() {
   var nome = window.prompt('Qual é o nome do aluno?');
   var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
   var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));

   var media = (nota1 + nota2) / 2;

   var res = document.querySelector('div#res')
   res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.`
   res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>`
   res.innerHTML += `<p>A média final será <mark>${media}</mark>.`

   if (media > 5) {
      res.innerHTML += `<p>A mensagem que temos é: <span id="passou">Meus parabéns!</span></p>`
   } else {
   res.innerHTML += `<p>A mensagem que temos é: <span id="perdeu">Estude mais!</span></p>`
   }
}
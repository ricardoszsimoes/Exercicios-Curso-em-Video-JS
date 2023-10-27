function clicou() {
   var num = window.prompt('Digite um número:');

   if (num % 2 === 0) {
        result.innerHTML = `<p>O número <strong>${num}</strong> que foi digitado é <strong>par</strong>!</p>`
   } else {
        result.innerHTML = `<p>O número <strong>${num}</strong> que foi digitado é <strong>ímpar</strong>!</p>`
   }
}
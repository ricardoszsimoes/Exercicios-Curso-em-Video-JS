document.querySelector('div#resultado')

function clicou() {
    var ano = prompt('Em que ano você nasceu?')
    
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear(); //Função usada para pegar o ano atual de acordo com o sistema.

    var idade = anoAtual - ano;

    resultado.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${anoAtual}.`

}
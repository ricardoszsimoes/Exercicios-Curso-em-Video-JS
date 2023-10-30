function clicou() {
    var data = new Date();
    var resultado = document.getElementById('resultado');
    
    var semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    var diaSem = data.getDay(); //Pega o número do dia da semana.
    
    var mes = ['Jan', 'Fev', 'Mar', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    var diaMes = data.getMonth(); //Pega o número do do mês.

    resultado.innerHTML = `
        Dia: ${data.getDate()}<br>
        Mês: ${mes[diaMes]}<br>
        Ano: ${data.getFullYear()}<br>
        Dia da semana: ${semana[diaSem]}<br>
        Hora: ${data.getHours()}<br>
        Minutos: ${data.getMinutes()}<br>
        Segundos: ${data.getSeconds()}<br>
    `;
    
    /*
    ${diasDaSemana[diaSem]} Mostra o dia da semana em formato de texto.

    Mês: ${mes[diaMes]} Mostra o mês em formato de texto.
    */

    if (diaSem >= 0 && diaSem<= 6){
        document.innerHTML = diasDaSemana[diaSem];
    } else {
        document.innerHTML = '[ERROR] Dia da semana inválido!';
    }
}

/* 
Primeiro código feito:

function clicou() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var sem = data.getDay();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    document.getElementById('resultado');
    resultado.innerHTML = `Dia: ${dia}<br>`
    resultado.innerHTML += `Mês: ${mes}<br>`
    resultado.innerHTML += `Ano:  ${ano}<br>`
    resultado.innerHTML += `Dia da semana: ${sem}<br>`
    resultado.innerHTML += `Hora: ${hora}<br>` 
    resultado.innerHTML += `Minutos: ${min}<br>` 
    resultado.innerHTML += `Segundos: ${seg}<br>`
}
*/
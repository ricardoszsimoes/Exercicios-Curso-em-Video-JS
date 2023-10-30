function clicou() {    
    var data = new Date()
    var info = data.toUTCString(); // Para aparecer: semana, mês, dia, ano, hora/minuto/segundo e GMT
    
    document.getElementById('resultado').innerHTML = `<p>O que eu recebi do sistema foi: <mark>${info} (Horário Padrão de Brasília)</mark></p>`
}


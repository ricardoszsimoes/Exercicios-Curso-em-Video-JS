function clicou(){
    var nome = window.prompt('Qual é o nome do aluno?');

    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));

    var media = (nota1 + nota2) / 2;

    document.getElementById("resultado").innerHTML = (`Calculando a média final de <mark>${nome}</mark>.
    <br>
    As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.
    <br>
    A média final será <mark>${media}</mark>.`);
}
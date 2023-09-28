/*console.log("Está funcionando");

let anoDeNascimento = window.prompt("Em que ano você nasceu?");
console.log(anoDeNascimento);
alert("Quem nasceu em" + anoDeNascimento + "vai fazer  anos e em 2023");
let dataAtual = window.prompt("Em qual ano estamos")

let resultado = dataAtual - anoDeNascimento
console.log(resultado);
alert("Quem nasceu em " + dataAtual - anoDeNascimento)*/

//----------------------------//
//calculadora de nota 

let nota1 = parseFloat(window.prompt("Nota do primeiro trimestre: "));
console.log(nota1);
let nota2 = parseFloat(window.prompt("Nota do segundo trimestre: "));
console.log(nota2);
let nota3 = parseFloat(window.prompt("Nota do terceiro trimestre: "));
console.log(nota3);

resultado = nota1 + nota2 + nota3;
console.log(resultado);

if(resultado >= 180){ 
    alert("Resultado final" + resultado + passou)
}else{
    let notaNecessaria = 180 - (nota1+nota2+nota3)
    let resultadoFinal
}
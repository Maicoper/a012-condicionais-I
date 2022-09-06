/*
Escreva um código que receba três valores. Uma idade, 
um booleano que responda se a pessoa terminou ou não o 
ensino médio, e um booleano que responda se a pessoa 
está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes 
afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;
Crie um `if` que imprima que a afirmacão é verdadeira, e 
um `else` para imprimir que a afirmacão não é verdadeira
*/

let idade = prompt("Digite sua Idade:")
let temEnsMed = confirm("Possui Ensino Médio?")
let fazFacul = confirm("Estuda em uma Instituição de Ensino Superior?")

if(idade >= 18) {
    console.log("É maior de idade!")
} else {
    console.log("É menor de idade!")
}

if(temEnsMed === true) {
    console.log("Tem Ensino Médio!")
} else {
    console.log("Não tem Ensino Médio!")
}

if(fazFacul === true) {
    console.log("Ensino Superior em Andamento")
} else {
    console.log("Não estuda em Ensino Superior")
}

/**
 Gerador de tags de identificação
Crie um script para gerar a etiqueta(tag) de identificação que será presa na coleira de um cachorro no abrigo. 
O dono irá informar nome, idade, peso, raça e se é adotado ou não

A tag deve ter:
O nome em letras maiusculas
A raça com primeira letra maiuscula 
peso

 */
/**
// Gerador de tags de identificação
const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado =false

let nameUpperCase = nome.toUpperCase()
let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter

}]

console.log(animal)
*/

function geradorDeTagsDeIdenficacao (nome, idade, peso, raca, adotado){
   const nomeMaiusculo = nome.toUpperCase()
   let primeiraLetraNome = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

   const tag = [{
        nome: nomeMaiusculo,
        peso: peso,
        raca: primeiraLetraNome
    }]

    return tag;

}
console.log ( geradorDeTagsDeIdenficacao ('Dogo', 3, 1.2, 'vira-lata', 'sim' ))

/**
 * Contador de satisfação de passeio
Crie um script que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que
ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

Use a estrutura de repetição while.

Exiba:
- Qual o número da volta atual
- Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)
 */

/**
let voltasParaDogFicarSatisfeiro = 5
let volta = 1

while (volta <= voltasParaDogFicarSatisfeiro){
    console.log(`volta de numero ${volta} com o Pitoco`)

    volta++
}

console.log(`Acabou o passeio, Pitoco!!!`)
*/


//ALTERNATIVA 3 com função
function verificarSeEstaSatisfeito(){ 
let voltasParaDogFicarSatisfeiro = 5
let volta = 1

    while ( volta <= voltasParaDogFicarSatisfeiro) {

    console.log(`volta de numero ${volta} com o Pitoco`)
    console.log(`Pitoco ainda não está satisfeito`)

    volta++
    }
}   
console.log(`Acabou o passeio, Pitoco!!!`)

verificarSeEstaSatisfeito();








//ALTERNATIVA 2
/**
 * let nVoltas = 0
while (nVoltas <= 4){

    if (nVoltas < 4)
        console.log("Eu não estou satisfeito")
    else console.log("Eu estou satisfeito")

    console.log(`Volta ${nVoltas + 1}`)

    nVoltas++
}

*/










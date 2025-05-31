
/**
 * Programa sobre função
?? Hands-on
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
*/











/**
Programa Retornando Número de Vogais
?? Hands-on
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
 * 
 * 
 * 
 * 
 * 
function contarVogais(texto) {
  const vogais = texto.match(/[aeiou]/gi); 
  return vogais ? vogais.length : 0; // Retorna o número de vogais ou 0 se não encontrar
}

console.log(contarVogais("Kata todas as vogais"));
*/


function katarVogais ( texto ){
  const vogais = texto.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;

} 
console.log(katarVogais(`hoje`));




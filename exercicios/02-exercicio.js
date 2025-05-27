/**
 * Hands-on
Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes
mal formatados. Crie um script para limpar e padronizar
os nomes.
Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado
Extra: aplique uma regra que confira se o nome
informado possui apenas uma palavra. Exiba se o
nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

const nomeDog = "Bailey Maria"

let nomeFormatado = removerCaracteresEspeciais(nomeDog)
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.lenght).toLowerCase()

//const palavras = nomeFormatado.split(/\s+/);
//console.log(palavras)
//const valido = nomeFormatado.split(" ").length === 1;

// == - compara valores(coersão de tipo)
// === - estritamente igual
/*
    operadores = comparação, logica, aritmetica

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que a ' VARIAVEL B
    === -> VARIEAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que a 'VARIAVEL B

*/



const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeDog.charAt())
console.log(valido)


function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}








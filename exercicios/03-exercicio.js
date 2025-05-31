/**
 * Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser
adotado com base na idade mínima definida, por
exemplo, 2 anos.
Use os operadores adequados e exiba:
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para
permitir que se o cão for de pequeno porte, pode ser
adotado independente da idade
 * 
Exemplos:
minimo = 2

idade 1 + porte M = nao
idade 2 + porte M = sim, pela idade
idade 2 + porte P = sim, pela idade
idade 1 + porte P = sim, pelo porte
 */
/**
const idade = 0
const porte = 'P'

const idadeMinima = 2

const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)


it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
  })
*/

//const porte = 'P'


function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 1;
  const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'M' 
                ? 'sim'
                : 'não'

  return adocao
  
}
verificarSePodeSerAdotado(1, 'M')
// idade 1 + porte M = nao
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, 'M')
//verificarSePodeSerAdotado(2, 'M')
//verificarSePodeSerAdotado(2, 'P')
//verificarSePodeSerAdotado(1, 'P')


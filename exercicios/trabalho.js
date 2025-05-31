// Gerador de tags de identificação - geradorDeTagsDeIdentificacao

function geradorDeTagsDeIdentificacao (nome){
   
    const nomeMaiusculo = nome.toUpperCase();
    return nomeMaiusculo
}
 console.log(geradorDeTagsDeIdentificacao (`pantera`));



 //verificarSePodeSerAdotado
function verificarSePodeSerAdotado(idade, porte) {
  if (idade >= 1 || porte === 'M'){
    return true;
  } else {
    return false
  }
}
console.log(verificarSePodeSerAdotado( 1, 'M'));



  //calcularConsumoDeRacao,
function calcularConsumoDeRacao(nome, estoque, peso) {
  const gramasPorDia = peso * 300
  const duracaoEstoque = Math.floor(estoque / gramasPorDia)

  return gramasPorDia
}
console.log(calcularConsumoDeRacao(`Pitoco`, 1 , 14.5));



  //decidirTipoDeAtividadePorPorte,
function decidirTipoDeAtividadePorPorte(porte){
    let atividade
    switch (porte){
        case 'pequeno':
            atividade = `brincar dentro de casa`
            break
        case 'medio':
            atividade = `caminhada no quarteirão`
            break
        case 'grande':
            atividade = `correr no parque`
            break
        default:
            atividade = `porte inválido`
        
    }
    return atividade
}
console.log(decidirTipoDeAtividadePorPorte(`pequeno`));


//  
async function buscarDadoAsync(nomePet){
    
    if (nomePet === 'Pipoca'){ 
    return nomePet 
    }

  }    

console.log(await buscarDadoAsync(`Pipoca`));


export {

geradorDeTagsDeIdentificacao,
verificarSePodeSerAdotado,
calcularConsumoDeRacao,
decidirTipoDeAtividadePorPorte,
buscarDadoAsync

}


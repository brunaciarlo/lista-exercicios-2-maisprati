// Conversão Entre Formatos
// Escreva duas funções:
//     paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
//     objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjetos(pares){
    return pares.reduce((obj, [chave, valor]) => {

        obj[chave] = valor;
        return obj;

    }, {});
}

function objetoParaPares(obj){
    return Object.entries(obj);
}

const pares = [['nome', 'Bruna'], ['idade', 24], ['cidade', 'Porto Alegre']];
const objeto = paresParaObjetos(pares);

console.log(objeto);
console.log(objetoParaPares(objeto));
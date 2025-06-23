// Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

let frase = prompt('Escreva uma frase: ');

function extrairPalavrasUnicas(frase){

    frase = frase.toLowerCase();
    let fraseEmArray = frase.split(' ');
    let palavrasUnicas = [];

    for(i = 0; i < fraseEmArray.length; i++){

        let palavra = fraseEmArray[i];

        if(!palavrasUnicas.includes(palavra)){
            palavrasUnicas.push(palavra)
        }
    }

    console.log(palavrasUnicas);
}

extrairPalavrasUnicas(frase);
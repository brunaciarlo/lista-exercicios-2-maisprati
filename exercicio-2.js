// Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const numeroGerado = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

let numero = Number(prompt('Adivinhe o número: '));
tentativas++;

while (numero !== numeroGerado){
    
    numeroGerado > numero ? console.log("Mais alto") : console.log("Mais baixo");

    numero = Number(prompt('Tente novamente: '));
    tentativas++;
}

console.log(`Parabéns, você acertou em ${tentativas} tentativas, o número é ${numeroGerado}`);

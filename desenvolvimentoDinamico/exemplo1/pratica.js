let rlSync = require("readline-sync");

let nome = rlSync.question("Digite seu nome: \n");
let sobrenome = rlSync.question("Digite seu sobrenome: \n");

let nomeCompleto = nome + " " + sobrenome;

console.log(`Seu nome completo é: ${nomeCompleto}`);

//const nome 
//let idade

//console.log (typeof nome)
//console.log (typeof idade)
 
//A idade veio como string pq não tá marcada como número, mas vou alterar.
//Depois da alteração, agora pergunta-se o nome e a idade.

const nome = prompt("Qual o seu nome?")
let idade = Number(prompt("quantos anos você tem?"))

console.log (typeof nome, nome)
console.log (typeof idade, idade)

console.log (`Olá ${nome},  você tem ${idade} anos`)


console.log('Olá mundo!');
//console.log('Olá mundo!'); comentário de linha

console.log("Olá mundo!");
/** 
 * comentário de bloco
 * 
 * console.log("Olá mundo!");
 * console.log("Olá mundo!");
 * console.log("Olá mundo!");
 */

// Variáveis
var olaMundo = "Hello World!"; //var é global
let helloWorld = "Olá Mundo!"; //let é local
console.log(olaMundo);
console.log(olaMundo);
console.log(helloWorld);
console.log(helloWorld);

// = atribuição
let a = 10; 
const b = "10"; 
let resultado = 0;

console.log("a = " + a + ", b = " + b)
//Compara o valor de duas expressões
resultado = a == b;
console.log("a == b = " + resultado); //true

//Compara o valor e o tipo de dados
resultado = a === b;
console.log("a === b = " + resultado); //false

//Compara se os valores são diferentes
resultado = a != b;
console.log("a != b = " + resultado); //false

//Valores e tipos de variáveis diferentes
resultado = a !== b;
console.log("a !== b = " + resultado); //true


//Operadores lógicos
resultado = a == b || typeof a == 'string';
console.log("a == b || typeof a == 'string' = " + resultado); 

resultado = a == b && typeof a == 'string';
console.log("a == b && typeof a == 'string' = " + resultado);


// Operadores condicionais
let cor = "amarelo";

if(cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo"){

    console.log("atenção");

} else {

    console.log("pare");

}
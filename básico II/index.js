/**
 * return 
 * Encerra a função e retorna um valor.
 * 
 * Argumentos ou parâmetros são informações que as funções precisam.
 * 
 * Argumentos ou Args permitem acessar parâmetros de uma função.
 * 
 * callback
 * Função de retorno como parâmetro após uma ação.
 * 
 * DOM
 * Document Object Model é a estrutura como o HTML é formado.
 * 
 * Eventos
 * Ações realizadas na aplicação que dispara rotinas.
 * 
 * Array 
 * Array é uma variável indexada, no caso do JavaScript é possível ter um array com vários tipos de dados diferentes, até funções.
 * 
*/

// Funções

function somar(x1, x2) { //Função e seus parâmetros
    // retorna a soma dos dois parâmetros difinidos na função somar
    return x1 + x2;

}

//A variável resultado recebe o retorno da função somar()
let resultado = somar(5, 9);//Função e seus Argumentos

console.log(resultado); // 14

function calcular(x1, x2, operador) { //Função e seus parâmetros
    // A função eval, avalia o código JavaScript e o executa como um script.
    return eval(`${x1} ${operador} ${x2}`);
}

//A variável resultado recebe o retorno da função calcular()
resultado = calcular(8, 9, "+"); //Função e seus Argumentos
console.log(resultado); // 17


// Função anônima é chamado no assim que ela é criada
(function (x1, x2, operador) { //Função e seus Argumentos

    // A função eval, avalia o código JavaScript e o executa como um script.
    let resultado = eval(`${x1} ${operador} ${x2}`);
    console.log(resultado); // 7
    return resultado;
})(3, 4, "+"); // Argumento da função anônima



// Arrow Function
let calc = (x1, x2, operador) => { // A variável calc recebe a arrow function
    // A função eval, avalia o código JavaScript e o executa como um script .
    return eval(`${x1} ${operador} ${x2}`);
}

resultado = calc(8, 9, "*"); //Arrow Function e seus Argumentos
console.log(resultado);


//Eventos

// window manipulamos a aplicação
window.addEventListener('focus', event => {// Evento de foco, com este evento é possível saber quando o usuário voltou a página  

    console.log("focus");

});

// document manipulados a DOM
document.addEventListener('click', event => { // Evento de click, com este evento é possível saber quando o usuário clica na página  
    console.log("click");
});


//TimeStamp é a quantidade de segundos desde 01/01/1970
// let agora = Date.now(); // Date.now(); vai trazer a quantidade de segundos desde 01/01/1970
let agora = new Date(); // já new Date(); vai mostrar a data e a hora atuais.
console.log(agora);

console.log(agora.getDate()); // Pega o dia
console.log(agora.getFullYear()); // Pega o ano

console.log(agora.getMonth()); // Pega o mês, detalhe: é um array de meses, então começa com zero.
console.log(agora.toLocaleDateString("pt-BR")); // Pega a data no formato do Brasil

//Array é uma variável indexada, no caso do JavaScript é possível ter um array com dados diferentes.
let carros = ["Palio", "Toro", "Uno", 10, true, new Date(), function calcular(x1, x2, operador) {
                                                                return eval(`${x1} ${operador} ${x2}`); 
                                                            }
]; // Função calcular está dentro do array carros

console.log(carros); // (7) ['Palio', 'Toro', 'Uno', 10, true, Sat Jul 08 2023 12:35:25 GMT-0300 (Horário Padrão de Brasília), ƒ]
console.log(carros.length); // 7 Mostra o tamanho do array 
console.log(carros[0]); // Palio, Mostra o primeior item do array 

console.log(carros[6](5, 5, "*")); // Usei a função calcular que está dentro do array carros

carros.forEach(function(value, index){

    console.log(index, value);

});

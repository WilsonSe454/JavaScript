/**
 * Classes agrupa
 * Atributos e métodos no mesmo lugar
 * 
 * return 
 * Encerra a função e retorna um valor
 * 
 * Argumentos ou parâmetros são informações que as funções precisam
 * 
 * Argumentos ou Args permitem acessar parâmetros de uma função
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
    // A função eval, avalia o código JavaScript e o executa.
    return eval(`${x1} ${operador} ${x2}`);
}

//A variável resultado recebe o retorno da função calcular()
resultado = calcular(8, 9, "+"); //Função e seus Argumentos
console.log(resultado); // 17


// Função anônima é chamado no assim que ela é criada
(function (x1, x2, operador) { //Função e seus Argumentos

    // A função eval, avalia o código JavaScript e o executa.
    let resultado = eval(`${x1} ${operador} ${x2}`);
    console.log(resultado); // 7
    return resultado;
})(3, 4, "+"); // Argumento da função anônima
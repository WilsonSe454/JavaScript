/**
 * Classes 
 * Agrupa atributos e métodos no mesmo lugar.
 * Irá englobar todos os assuntos em comum.
 * 
 * Instância 
 * É quando o objeto representa uma classe 
 * 
 * this
 * É um comando interno usado para referenciar atributos e métodos na mesma classe.
  */


console.log("----------------------Jeito Antigo------------------------");
let celular = function() {
    //This É um comando interno usado para referenciar atributos e métodos na mesma classe.
    // Atributos
    this.cor = "prata"; 

    // Métodos
    this.ligar = function() {

        console.log("Uma ligação");
        return "Ligando";

    }

}

let objeto = new celular(); // Cria a instância de um objeto
console.log(objeto); // Mostra o objeto celular
console.log(objeto.cor); // Mostra a cor do objeto celular
console.log(objeto.ligar()); // Mostra a cor do objeto celular

console.log("----------------------Jeito Novo-------------------------");


class celularN {

    constructor() {
        // Atributos
        this.cor = "Azul";

    }

    // Métodos
    ligar = function () {

        console.log("Recebendo uma Ligação");
        return "Atender";

    }

}

let objetoN = new celularN(); // Toda vez que coloca o conjunto de parênteses, é chamado o método construtor automaticamente.
console.log(objetoN); // Mostra o objetoN celularN
console.log(objetoN.cor); // Mostra a cor do objetoN celularN
console.log(objetoN.ligar()); // Mostra a cor do objetoN celularN


let cor = "azul";

// Case Condição: (então) instruções; break;
switch (cor) {
    case "verde":
        console.log("siga");
        // break para interromper o bloco
        break;
    case "amarelo":
        console.log("atenção");
        // break para interromper o bloco
        break;
    case "vermelho":
        console.log("pare");
        // break para interromper o bloco
        break;
    default:
        console.log("não sei");
    // não utiliza o break 

}

// Laço de repetição

/* 
For(valor inicial; valor final; incremento){
    instrução
}
 */

let n = 5;

for (let i = 0; i <= 10; i++) {
    // Template String é um recurso do JavaScript que permite a inserção de códigos JS junto a uma string usando a crase `${js}`. 
    console.log(`${n} X ${i} = ${n * i}`);

    // Sem este recurso seria necessário concatenar os valares dentro do console.log
    // console.log(n+" X "+ i + " = " + n * i);
}
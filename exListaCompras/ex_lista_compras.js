// Prog. Imperativa 11/06/2021
//Exercício Lista de Compras - Arrays
console.log("Mostrando a Lista de Compras:");
let listaCompras = ['arroz', 'feijao', 'batata', 'carne', 'suco'];
console.log(listaCompras);

// .join
console.log(" Join -> junta os elementos do array com um separador, ou com vírgulas por padrão:");

let listaSeparada = listaCompras.join(' - ');

console.log(listaSeparada);

// .pop
console.log(" Pop -> elimina o último elemento e o retorna:");

let ultimoItem = listaCompras.pop();

console.log("*** APÓS .POP ***");
console.log(listaCompras);
console.log("*** RETORNANDO ÚLTIMO ITEM ***");
console.log(ultimoItem);

// .shift
console.log(" Shift -> elimina o primeiro elemento e o retorna:");

let primeiroItem = listaCompras.shift();

console.log("*** APÓS .SHIFT ***");
console.log(listaCompras);
console.log("*** RETORNANDO PRIMEIRO ITEM ***");
console.log(primeiroItem);

// .push
console.log(" Push -> adiciona um ou mais elementos ao array e retorna o novo comprimento:");
console.log("*** APÓS .PUSH ***");

listaCompras.push("barbecue", "sal grosso");
console.log(listaCompras);

console.log("*** RETORNANDO O NOVO COMPRIMENTO ***");
console.log(listaCompras.length);

// .unshift
console.log(" Unshift -> adiciona um ou mais elementos ao iníco do array e retorna o novo comprimento");
console.log("*** APÓS .UNSHIFT ( POR ÚLTIMO MAS NÃO MENOS IMPORTANTE) ***");

listaCompras.unshift("cerveja");
console.log(listaCompras);

console.log("*** RETORNANDO O NOVO COMPRIMENTO ***");
console.log(listaCompras.length);

console.log("E agora você sabe o que comprar pro seu churras de amanhã!");
console.log("SEXTOU!!");
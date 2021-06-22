// Aula assíncrona Objetos - 21/06/2021
// Cria função construtora

function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
};



let restauranteAlfa = {
    nome: 'Alfa', 
    cardapio: ['arroz', 'feijao', 'batata', 'macarrao'],
    entrada: function() { 
        return 'Olá, seja bem vindo ao' + ' ' + this.nome + '. ' + 'Nosso cardápio:' + ' ' + this.cardapio + '. ';},
    };

let restauranteBeta = {
    nome: 'Beta', 
    cardapio: ['sushi', 'sashimi', 'temaki', 'poke'],
    entrada: function() { 
        return 'Olá, seja bem vindo ao' + ' ' + this.nome + '. ' + 'Nosso cardápio:' + ' ' + this.cardapio + '. ';}
    };
    

// console.log para testes:

console.log(restauranteBeta.entrada());



// Teste com função externa

// let umaEntrada = {
//     entrada: function() { 
//         return 'Olá, seja bem vindo ao' + '' + this.nome + 
//         'Nosso cardápio:' + '' + this.cardapio;}
// }


// let restauranteAlfa = new Restaurante('Alfa', ['arroz', 'feijao', 'batata', 'macarrao']);
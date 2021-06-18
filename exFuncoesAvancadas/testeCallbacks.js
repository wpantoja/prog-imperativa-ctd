// 17/06/2021 - Funções Avançadas
// Teste Callbacks

const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(20, 10, somar));
console.log(calculadora(20, 10, (numeroA, numeroB) => numeroA-numeroB)); // Arrow function declarada dentro do terceiro parâmetro

// Função bomDia

function iniciais(nome, sobrenome) {
    return nome[0] + sobrenome[0];
};

function bomDia(nome, sobrenome, callback) {
    return 'Olá, ' + callback(nome, sobrenome);
};

console.log(bomDia('Eduardo', 'Marcondes', iniciais,));
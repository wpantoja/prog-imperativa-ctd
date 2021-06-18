// 17/06/2021 - Funções Avançadas
// Teste Closure

function saudacaoPersonalizada(nome) {
    let saudacaoGenerica = 'Hello' ;
    function saudar(){
        return saudacaoGenerica + ' ' + nome + '!';
    }
    return saudar();
}

console.log(saudacaoPersonalizada('Edy')); // Colocar variável nome dentro de aspas
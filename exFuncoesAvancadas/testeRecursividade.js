// 17/06/2021 - Funções Avançadas
// Teste Recursividade

function decrementar(numero){
    console.log(numero)   // console.log é necessário para podermos ENXERGAR os números que vão aparecendo

    numero--

    if(numero >= 0){
        decrementar(numero)
    }
}

decrementar(19);
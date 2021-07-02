

function microondas(comida, t) {
// Condições "nome do prato" e "tempo"
    switch (comida) {
        case "Pipoca":
            tempo = 10
            break;

        case "Macarrão":
            tempo = 8
            break;

        case "Carne":
            tempo = 15
            break;

        case "Feijão":
            tempo = 12
            break;

        case "Brigadeiro":
            tempo = 8
            break;
    

        default:
            console.log("Prato inexisente!")
            return
    }

// Definindo as condições para as variáveis
    if(t < tempo){
        console.log("Tempo insuficiente")
    }
    if(t >= tempo*2 && t < tempo*3){
        console.log("A comida queimou!!!")
    }
    if(t >= tempo*3){
        console.log("KABUMM!!!")
    }
    else if(t >= tempo && t < tempo*2){
        console.log("Prato pronto, bom apetite!!!")
    }
}

// Testando diferntes condições:
microondas("Pipoca", 10);
microondas("Pipoca", 15);
microondas("Macarrão", 8);
microondas("Macarrão", 17);
microondas("Carne", 10);
microondas("Carne", 15);
microondas("Carne", 30);
microondas("Pipoca", 32);
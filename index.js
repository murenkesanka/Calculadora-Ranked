let vitorias = [230, 360, 480]
let derrotas = [225, 300, 379]
let rank = ""

for (i=0 ; i<= 2 ; i++){
    let quantVitorias = calculoDeVitorias(vitorias[i],derrotas[i])
        if (quantVitorias < 10){
            rank = "Ferro"
            }else if (quantVitorias >= 11 && quantVitorias <= 20){
            rank = "Bronze"
            }else if (quantVitorias >= 21 && quantVitorias <= 50){
            rank = "Prata"
            }else if (quantVitorias >= 51 && quantVitorias <= 80){
            rank = "Ouro"
            }else if (quantVitorias >= 81 && quantVitorias <= 90){
            rank = "Diamante"
            }else if (quantVitorias >= 91 && quantVitorias <= 100){
            rank = "Lendário"
            }else if (quantVitorias >= 101){
            rank = "Imortal"
        }
    console.log("Você ganhou : " + quantVitorias + " partidas e está no " + rank)
}

function calculoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

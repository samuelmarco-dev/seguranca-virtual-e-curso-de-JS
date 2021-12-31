//função similar a um radar de velocidade
//a cada 5km/h do limite você ganha 1ponto na CNH
//caso os pontos sejam maior que 12: suspensão da CNH

function verificaVelocidade(velocidade){
    let totalPontos;
    const velocidadeMax = 70;
    const pontosMax = 12;

    if(velocidade <= velocidadeMax){
        return `Sua velocidade foi de ${velocidade}km/h => Está dentro dos limites de velocidade`;
    }else{
        totalPontos = Math.floor(((velocidade - velocidadeMax) / 5));
        if(totalPontos >= pontosMax){
            return `O número de pontos foi de ${totalPontos} => CNH suspensa`;
        }
        else{
           return `Você recebeu ${totalPontos} pontos em sua CNH => Procure os órgãos de trânsito`;
        }
    }
}

// const resultadoAlgoritmo = verificaVelocidade(70);
// const resultadoAlgoritmo = verificaVelocidade(140);
const resultadoAlgoritmo = verificaVelocidade(90);
console.log(resultadoAlgoritmo);
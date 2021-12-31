//funcao que retorna maior numero
function maiorNumero(a, b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else{
        console.log('Os números são iguais!');
    }
}

//alternativa
// function maiorNumero(a, b){
//     if(a > b)
//         return a;
//     return b;
// }

let saida = maiorNumero(10, 10);
console.log(saida);
// recebe uma quantidade n de valores e determina cada valor como ímpar ou par

function exibeTipo(valoresLimite){
    if(typeof valoresLimite !== 'number'){
        console.log('Este tipo de dado não é do tipo number');
    }
    for (let index = 0; index <= valoresLimite; index++) {
        if(index % 2 === 0){
            console.log(index, 'par');
        }else{
            console.log(index, 'ímpar');
        }
    }
}

exibeTipo(5);
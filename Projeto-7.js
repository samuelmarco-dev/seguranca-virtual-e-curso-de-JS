// função que retorna a soma de todos os múltiplos de 3 e 5

function somarMultiplos(limite){
    let somaTotal;
    let multiplos_3 = 0, multiplos_5 = 0;
    
    for (let index = 0; index <= limite; index++) {
        if(index % 3 === 0){
            multiplos_3 += index;
        }
        if(index % 5 === 0){
            multiplos_5 += index;
        }
    }
    
    somaTotal = multiplos_3 + multiplos_5;
    console.log(somaTotal);
}

// em 10: multiplos de 3 (3,6,9) e multiplos de 5 (5,10) => soma: 33
//somarMultiplos(10);
somarMultiplos(20);
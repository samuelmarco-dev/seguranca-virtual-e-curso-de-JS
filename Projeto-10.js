// função que imprima os números primos para o usuário 
// Ex: 15 => 2,3,5,7,11,13

function verificaPrimo(numero){
        for (let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0){
                return false;
            }
        }
        return true;
}

function numeroPrimo(limite){
    for (let numero = 2; numero <= limite; numero++) {
        
        if(verificaPrimo(numero)){
            console.log(numero);
        }
    }
}

// numeroPrimo(15);
numeroPrimo(20);
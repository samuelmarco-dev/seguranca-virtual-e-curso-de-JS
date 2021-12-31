//projeto FizzBuzz
//Fizz(divisível por 3) e Buzz(divisível por 5) ou por ambos: FizzBuzz
//Não divisível: entrada. Se não for número retorna mensagem

function fizzBuzz(valor){
    if(typeof valor !== "number"){
        return `Este tipo de dado não é um número`;
    }
    if(valor % 3 === 0 && valor % 5 === 0){
        return `${valor} é divisível por 3 e 5 => saída: FizzBuzz`;
    }
    if(valor % 3 === 0){
        return `${valor} é divisível por 3 => saída: Fizz`;
    }
    if(valor % 5 === 0){
        return `${valor} é divisível por 5 => saída: Buzz`;
    }
    else{
        return valor;
    }
}

const resultadoAlgoritmo = fizzBuzz(15);
console.log(resultadoAlgoritmo);
//array do tipo primitivo
let numeros = [0,1,2,3,4,5,6,7,8,9];


//adicionando elementos
//INICIO
numeros.unshift(17);

//MEIO
numeros.splice(6, 0, 'Meio do Arrry');
console.log(numeros);

//FIM
numeros.push(5);
console.log(numeros);


//encontrar elementos de um array
//EXISTÊNCIA DE UM VALOR
numeros.indexOf(17);
console.log(numeros.indexOf(17));

//OCORRÊNCIA DE UM VALOR
numeros.lastIndexOf(5);

//VERIFICAÇÃO ALTERNATIVA COM ES6
numeros.includes(17);
console.log(numeros.includes(17));


//remover elementos de um array
console.log(numeros);
//FINAL
numeros.pop();

//INICIO
numeros.shift();

//MEIO
let itemremovido = numeros.splice(4, 6);
console.log(itemremovido);
console.log(numeros);


//esvaziando um array
let numeros = [1,2,3,4,5];

//SOLUÇÂO 1
numeros = []; //não apaga a referência

//SOLUÇÂO 2
numeros.length = 0; //apaga todas as referências

//SOLUÇÂO 3
numeros.splice(0, numeros.length); //apaga todas as referências

//SOLUÇÂO 4
while(numeros.length > 0){
    numeros.pop();
}

//combinar array e dividir array
const primeiro = [1,2,3];
const segundo = [4,5,6];

//COMBINAR
primeiro.concat(segundo);
//com ES6 por meio do spread operator
const combinado = [...primeiro, 'novo elemento' , ...segundo];

//COMBINANDO ELEMENTOS
combinado.join('.');
frase.join('-'); //url

let frase = 'Olá seja bem-vindo a tela inicial';
frase.split(' '); //separa em strings

//DIVIDIR
primeiro.slice(1, 3);

//COPIANDO
primeiro.slice(); //apenas para tipos primitivos
//com ES6 por meio do spread operator
[...primeiro];
[...combinado];


//array do tipo referencia
let marcas = [
    {id: 1, nome: 'Série A'},
    {id: 2, nome: 'Série B'},
    {id: 3, nome: 'Série C'}
];

let marcaRetorno = marcas.find((marca) => {
    return marca.nome === 'Série A'
});
console.log(marcaRetorno);
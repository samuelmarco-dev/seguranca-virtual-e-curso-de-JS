//variaveis iniciais
let a = 'vermelho';
let b = 'azul';

//variavel auxiliar
let c = '';

console.log('O conteúdo de a é:', a);
console.log('O conteúdo de b é:', b);
console.log('\n-----Com a troca de valores-----');

//troca de valores
function trocaValores(a, b){
    c = a;
    a = b;
    b = c;
    console.log('O conteúdo de a é:', a);
    console.log('O conteúdo de b é:', b);
}

//chamada
trocaValores(a, b);
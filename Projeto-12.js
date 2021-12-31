// encontre a igualdade entre objetos

function Endereco(rua,cidade,cep,ddd){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep,
    this.ddd = ddd
};

let enderecoJoao = new Endereco('Rua Carlos Gomes', 'Sao Paulo', '15138-352', '11');
let enderecoMaria = new Endereco('Rua Farid Silva', 'Sao Paulo', '11680-000', '11');
let enderecoRonaldo = enderecoJoao;

function saoIguais(objetoJoao, objetoMaria){
    //comparar as propriedades
    return objetoJoao.rua === objetoMaria.rua &&
        objetoJoao.cidade === objetoMaria.cidade &&
        objetoJoao.cep === objetoMaria.cep &&
        objetoJoao.ddd === objetoMaria.ddd;
}

function enderecoMemoriaIguais(objetoJoao, objetoMaria){
    //comparar referencia do objeto na memória
    return objetoJoao === objetoMaria;
}

console.log(saoIguais(enderecoJoao, enderecoMaria));
console.log(enderecoMemoriaIguais(enderecoJoao, enderecoMaria) + '\n');

console.log(saoIguais(enderecoJoao, enderecoRonaldo));
console.log(enderecoMemoriaIguais(enderecoJoao, enderecoRonaldo));
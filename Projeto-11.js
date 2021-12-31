// construindo Objeto meu endereço que contem: rua, cidade, CEP

let endereco = {
    rua: 'Praça da Sé',
    cidade: 'São Paulo',
    CEP: '01001-000',
    ddd: '11'
};

function exibeEndereco(objeto){
    for (const chave in objeto) {
        console.log(`${chave}: ${objeto[chave]}`);
    }
}

//saída algoritmo
exibeEndereco(endereco);
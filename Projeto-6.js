// ler propriedades dentro de um objeto e exibir apenas as propriedades que são strings

let objeto = {
    titulo: 'Velozes e Furiosos',
    ano: 2021,
    personagem: 'Dominic Toretto',
    carro: 'Dodge Charger'
};

function exibeString(obj){
    for (const propriedade in obj) {
        if (typeof obj[propriedade] === 'string') {
            console.log(`${propriedade}: ${obj[propriedade]}`);
        }
    }
}

exibeString(objeto);
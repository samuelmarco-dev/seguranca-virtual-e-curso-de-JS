// exercício faixa de preço a partir da filtragem de sites ecommerce com array de objetos

//primeira forma de resolução
let faixaPreco = [
    {tooltip: 'até R$700', minimo:0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'até R$1000 ou mais', minimo: 1000, maximo: 999999},
];
console.log(faixaPreco);

//alternativa utilizando factory function
function criarFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip, minimo, maximo
    };
}
let testeFaixaPreco = [
    criarFaixaPreco('até R$2000', 900, 2000)
];
console.log(testeFaixaPreco);

//alternativa utilizando constructor function
function CriarFaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo, 
    this.maximo = maximo
}
let exibeFaixaPreco = [
    new CriarFaixaPreco('até R$6000', 2500, 6000)
];
console.log(exibeFaixaPreco);

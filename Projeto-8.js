// media de nota escolar a partir de um array
// F: 0-59
// D: 60-69
// C: 70-79
// B: 80-89
// A: 90-100
let arrayNotas = [70,70,80];

function calcularMedia(array){
    let soma = 0;
    // for (let index = 0; index < array.length; index++) {
    //     soma += array[index];
    // }

    for (let valor of array) {
        soma += valor;
    }
    return (soma/(array.length));
}

function mediaNotas(notas){
    const media = calcularMedia(notas);
    
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';
}

// saída algoritmo
console.log(mediaNotas(arrayNotas));
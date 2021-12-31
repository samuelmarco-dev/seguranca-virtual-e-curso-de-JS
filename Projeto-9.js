// criar função que exibe a quantidade de asteríscos (*) passados em um determinada linha

function exibirAsteriscos(linhas){
    let string = '';
    for (let index = 1; index <= linhas; index++) {
        string += '*';
        console.log(string);
    }

    //or
    // for (let index = 1; index < linhas; index++) {
    //     let string = '';
    //     for (let j = 0; j < index; j++) {
    //         string += '*';
    //     }
    //     console.log(string);
    // }

}

exibirAsteriscos(10);
function verificarEntrada(){
    let mudaCor = document.querySelector('.verificar-click');
    mudaCor.classList.add('click-botao');
    
    let arrayConvidados = [
        'Amanda', 'José', 'Maria', 'Carlos', 'Paulo', 'Juliana', 'Pedro', 'Fernanda',
        'amanda', 'josé', 'maria', 'carlos', 'paulo', 'juliana', 'pedro', 'fernanda'
    ];
    let convites = [
        'Gabriel', 'Samuel', 'Vitória', 'gabriel', 'samuel', 'vitória'
    ];

    let nomeConvidado = document.querySelector('.meu-nome').value;
    let quemConvidou = document.querySelector('.meu-convite').value;

    if(arrayConvidados.includes(nomeConvidado) && convites.includes(quemConvidou)){
        document.querySelector('.permissao-convidado').innerHTML = `${nomeConvidado} você pode entrar! Boa festa!`;
    }else{
        document.querySelector('.permissao-convidado').innerHTML = `${nomeConvidado} você não pode entrar! Até uma próxima!`;
        mudaCor.classList.remove('click-botao');
    }
}
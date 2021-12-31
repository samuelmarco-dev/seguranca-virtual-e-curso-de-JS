/*
    montador de postagem de Blog por meio de um objeto
    titulo
    mensagem
    autor
    visualizações
    comentários
        [autor, mensagem]
    estaAoVivo
*/

let postagem = {
    titulo: 'Conservadorismo no Brasil',
    mensagem: 'Venha conhecer a história do conservadorismo no Brasil',
    autor: 'João Ferreira',
    visualizacoes: '70.688',
    comentarios: [
        {autor: 'Alexandre', mensagem: 'Parabéns!'},
        {autor: 'Matheus', mensagem: 'Excelente conteúdo!'}
    ],
    estaAoVivo: true
};

function mostrarPostagem(objeto){
    console.log(objeto);
}

mostrarPostagem(postagem);
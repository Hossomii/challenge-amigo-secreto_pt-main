//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let amigoEscolhido = 0;

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value
    console.log(nomeAmigo);
    if (nomeAmigo == '') {
        alert('É necessário preencher o campo com pelo menos um nome!');
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById('listaAmigos').innerHTML += `<li>${nomeAmigo}</li>`;
    
        limparCampo();
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length <= 1) {
        alert('É necessário adicionar pelo menos dois amigos para realizar o sorteio!')
    } else {
        let amigoSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        amigoEscolhido = listaDeAmigos[amigoSorteado];

        let resultadoSorteio = document.getElementById('resultado');
        resultadoSorteio.innerHTML = `<h3>O amigo sortudo foi: ${amigoEscolhido}</h3>`;

        document.getElementById('button-add').setAttribute('disabled', true)
        document.getElementById('button-draw').setAttribute('disabled', true);
        
        alterarTextoTitulo('Sorteio realizado, reinicie a página para realizar um novo sorteio!');
        
        limpaLista()
    }
}


function limparCampo() {
    campo = document.getElementById('amigo').value = '';
}

function limpaLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function alterarTextoTitulo(novoTexto) {
    document.querySelector('.section-title').innerHTML = novoTexto;
}
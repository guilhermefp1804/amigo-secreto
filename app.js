let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    amigo = amigo.trim();
    if (amigo != ''){
        listaAmigos.push(amigo);
        mostraNaTela('listaAmigos', montaListaAmigos());        
        document.getElementById('amigo').value='';
        document.getElementById('amigo').focus();
    }
    else{
        alert('Por favor, insira um nome.');
    }
}

function sortearAmigo(){
    let resultadoSorteio ="";
    if(listaAmigos.length > 0){    
        let indiceAmigo = parseInt((Math.random() * listaAmigos.length ));
        let amigo = listaAmigos[indiceAmigo];        
        listaAmigos.splice(indiceAmigo,1);
        resultadoSorteio = `<li>O amigo sorteado foi: ${amigo}</li>`;
        mostraNaTela('listaAmigos', montaListaAmigos());
    }
    else{
        alert("Não tem amigos na lista!")
    }
    mostraNaTela('resultado', resultadoSorteio);

}

function mostraNaTela(id, conteudo){
    document.getElementById(id).innerHTML= conteudo;
}

function montaListaAmigos(){
    let indice = 0;
    let lista = listaAmigos.length > 1 ? '<li>Amigos adicionados</li>' : listaAmigos.length == 0 ? "" :'<li>Amigo adicionado</li>';

    while (indice != listaAmigos.length ){
        lista+=`<li>${listaAmigos[indice]}</li>`;        
        indice++;
    }
    return lista;
}
    
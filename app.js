//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    amigo = amigo.trim();
    console.log('aqui');
    if (amigo != ''){
        listaAmigos.push(amigo);
        mostraNaTela('listaAmigos', montaListaAmigos());        
    
        
        console.log(listaAmigos);
        document.getElementById('amigo').value='';
        document.getElementById('amigo').focus();

    }
    else{
        alert('Por favor, insira um nome.');
    }
}

function sortearAmigo(){
    if(listaAmigos.length > 0){    
        let indiceAmigo = parseInt((Math.random() * listaAmigos.length ));
        let amigo = listaAmigos[indiceAmigo];
        mostraNaTela('resultado', `O amigo sorteado foi: ${amigo}`);
        listaAmigos.splice(indiceAmigo,1);
        mostraNaTela('listaAmigos', montaListaAmigos());
        console.log(listaAmigos, indiceAmigo);
    }
    else{
        alert("não tem amigos na lista!")
 
    }
}

function mostraNaTela(id, conteudo){
    document.getElementById(id).innerHTML= conteudo;
}

function montaListaAmigos(){
    let indice = 0;
    let lista = '<li>Amigos adicionados</li>';

    while (indice != listaAmigos.length ){
        lista+=`<li>${listaAmigos[indice]}</li>`;        
        indice++;
    }

    return lista;
}
    
async function listaItens (){
    const conexao = await fetch ('https://66324a57c51e14d69563fc47.mockapi.io/api/v1/produtos')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
    
}

async function criaItem(imagem, produto,preco,categoria){
    const itemNovo = await fetch('https://66324a57c51e14d69563fc47.mockapi.io/api/v1/produtos', {method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
        imagem:imagem,
        produto:produto,
        preco:preco,
        categoria:categoria
    })


})

const itemConvertido = await itemNovo.json()
return itemConvertido
}



// Função para excluir um item
async function excluiItem(event) {
    const targetElement = event.target;
    if (!targetElement) {
        console.error("Elemento alvo não encontrado.");
        return;
    }

    // Captura o elemento pai do botão "Excluir" clicado
    const produtoCard = targetElement.closest('.produto');
    
    // Verifica se o elemento pai foi encontrado
    if (!produtoCard) {
        console.error("Elemento .produto não encontrado.");
        return;
    }
    
    // Captura as informações do produto a partir do card
    const imagem = produtoCard.querySelector('.produto-img').src;
    const produto = produtoCard.querySelector('.produto-titulo').textContent;
    const preco = produtoCard.querySelector('.produto-preco').textContent;
    const categoria = produtoCard.querySelector('.tag').textContent;

    // Chama a API para excluir o item com base nas informações capturadas
    await conectaAPI.excluiItem(imagem, produto, preco, categoria);

    // Remove o card do produto da interface após a exclusão
    produtoCard.remove();
}

// Adiciona o evento de clique ao botão "Excluir" de cada produto
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-del')) {
        excluiItem(event);
    }
});

async function BuscaItens(termoBusca){
    const busca = await fetch(`https://66324a57c51e14d69563fc47.mockapi.io/api/v1/produtos?search=${termoBusca}`)
    const buscaConvertida = busca.json()
    return buscaConvertida
}


export const conectaAPI = {listaItens,criaItem,excluiItem,BuscaItens}
import { conectaAPI } from "./API.js"

const produto = document.querySelector("[data-produto]")

export default function card (imagem,produto,preco,categoria){
    const item = document.createElement("div")
    item.className = 'produto'
    
    item.innerHTML = `<div class="produto" data-itens>
    <img class="produto-img" src="${imagem}" />
    <h2 class="produto-titulo">
   ${produto}
    </h2>
    <p class="produto-preco" id="preco">R$ ${preco}</p>
    <div class="tags">
      <span class="tag">${categoria}</span>
    </div>
    <button class="btn-del"> Excluir </button>
  </div>`

  return item
}

async function listaItens(){
    const TodosItens = await conectaAPI.listaItens()
    TodosItens.forEach(el => produto.appendChild(card(el.imagem,el.produto,el.preco,el.categoria)))

}




// FILTRAGEM DE ITENS


// Função para filtrar os itens com base na categoria
async function filtrarItens(categoria) {
    const produtos = await conectaAPI.listaItens();
    const produtosFiltrados = produtos.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
    limparItens();
    produtosFiltrados.forEach(el => produto.appendChild(card(el.imagem, el.produto, el.preco, el.categoria, el.id)));
}

// Função para limpar os itens da tela
function limparItens() {
    produto.innerHTML = ''; // Remove todos os itens da tela
}

// Adiciona o evento de clique aos botões de filtro
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const categoria = event.target.dataset.categoria;
        if (categoria) {
            filtrarItens(categoria);
        }
    }
});




async function exibirTodosItens() {
    const produtos = await conectaAPI.listaItens();
    limparItens();
    produtos.forEach(el => produto.appendChild(card(el.imagem, el.produto, el.preco, el.categoria, el.id)));
}



// Adiciona o evento de clique aos botões de filtro
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const categoria = event.target.dataset.categoria;
        if (categoria) {
            filtrarItens(categoria);
        } else if (event.target.classList.contains('btn-todos')) {
            exibirTodosItens();
        }
    }
});




listaItens()
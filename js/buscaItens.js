import {conectaAPI} from "./API.js"
import card from "./mostrarItens.js"

async function BuscaItens(evt){
    evt.preventDefault()
    const pesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.BuscaItens(pesquisa)

    const itens = document.querySelector("[data-produto]")


    while(itens.firstChild){itens.removeChild(itens.firstChild)}

    busca.forEach(el => itens.appendChild(card(el.imagem,el.produto,el.preco,el.categoria)))

}

const btnPesquisa = document.querySelector("[data-btn-pesquisa]")

btnPesquisa.addEventListener("click",evt => BuscaItens(evt))
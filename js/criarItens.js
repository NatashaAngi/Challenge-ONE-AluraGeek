import { conectaApi } from "./conectaApi.js";

const form = document.querySelector("[data-formulario]")

async function CriarItens(evento){
    evento.preventDefault()

    const produto = document.querySelector("[data-produto]").value
    const preco = document.querySelector("[data-preco]").value
    const categoria = document.querySelector("[data-categoria]").value
    const imagem = document.querySelector("[data-imagem]").value

    await conectaApi.CriarItens(produto,preco,categoria,imagem)

    ListaDeItens()
    window.location.href ="../index.html"
}

form.addEventListener("submit",evento => CriarItens(evento))
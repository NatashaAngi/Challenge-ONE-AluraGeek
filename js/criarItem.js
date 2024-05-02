import { conectaAPI } from "./API.js"

const form = document.querySelector("[data-formulario]")
const btn = document.getElementById("#btn")

async function criaItem(evt){
    evt.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const produto = document.querySelector("[data-produto]").value
    const preco = document.querySelector("[data-preco]").value
    const categoria = document.querySelector("[data-categoria]").value

   await conectaAPI.criaItem(imagem,produto,preco,categoria)

   window.location.href = "../index.html"
   
}

form.addEventListener("submit",evt => criaItem(evt))


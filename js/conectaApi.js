async function ListaDeItens (){
   const conexao = await fetch ('http://localhost:3000/itens')
   const conexaoConvertida = await conexao.json()

   return conexaoConvertida
}

async function CriarItens(produto,preco,categoria,imagem){
    const conexao = await fetch ('http://localhost:3000/itens', {method:"POST", headers:{"Content-type":"application/json"}, body: JSON.stringify({produto:produto,preco:preco,categoria:categoria,imagem:imagem})
})

const conexaoConvertida = conexao.json()
return conexaoConvertida

}

export const conectaApi = {ListaDeItens,CriarItens}
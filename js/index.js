// // // 'https://natashaangi.github.io/data-base/database.json'
// // // "http://localhost:3000/itens"

// const botoes = document.querySelectorAll('.btn')

// let itens = []
// const endPointApi = 'https://66324a57c51e14d69563fc47.mockapi.io/api/v1/produtos'
// const elementoItens = document.getElementById('produtos')


// // FILTRAGEM DE ITENS
// botoes.forEach(btn =>btn.addEventListener('click', filtrarItens))

// function filtrarItens(){
//     const elementoBtn = document.getElementById(this.id)
//     const categoria = elementoBtn.value
//     let itensFiltrados = itens.filter(item => item.categoria==categoria)
//     ExibirProdutos(itensFiltrados)
  
   
// }


// getBuscarItensApi()

// async function getBuscarItensApi(){
//     const res = await fetch (endPointApi)
//     itens = await res.json()
//     console.table(itens)

//     ExibirProdutos(itens)
// }

// function ExibirProdutos(listaProdutos){
//   elementoItens.innerHTML = ''
//     listaProdutos.forEach(item =>{elementoItens.innerHTML += `
//     <div class="produto">
//     <img class="produto-img" src="${item.imagem}" alt="${item.alt}" />
//     <h2 class="produto-titulo">${item.produto}
//     </h2>
//     <p class="produto-preco" id="preco">R$ ${item.preco}</p>
//     <div class="tags">
//       <span class="tag">${item.categoria}</span>
//     </div>
//   </div>`})}

  



  
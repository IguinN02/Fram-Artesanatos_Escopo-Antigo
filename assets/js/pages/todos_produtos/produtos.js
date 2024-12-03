function exibirProdutos(produtos) {
  const produtosSection = document.querySelector('.produtos');
  produtosSection.innerHTML = '';

  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produtos__1');

    produtoDiv.innerHTML = `
      <a class="produto__link" href="produtos.html?id=${produto.IDproduto}">
        <img class="produto__img" src="${produto.Imagens}" alt="${produto.Nome}" />
        <div class="produto__info">
          <h3 class="produto__titulo">${produto.Nome}</h3>
          <p class="produto__descricao">${produto.Descricao}</p>
          <p class="produto__valor">R$${produto.Preco.toFixed(2)}</p>
        </div>
      </a>
      <button class="adicionar__carrinho">Adicionar ao Carrinho</button>
    `;

    produtosSection.appendChild(produtoDiv);
  });
}

function buscarProdutos() {
  fetch('http://localhost:3000/produto')
    .then(response => response.json())
    .then(data => exibirProdutos(data))
    .catch(error => console.error('Erro ao buscar os produtos:', error));
}

window.onload = buscarProdutos;
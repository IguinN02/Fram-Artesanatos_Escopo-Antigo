const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

if (produtoId) {
  fetchProduto(produtoId);
}

async function fetchProduto(id) {
  try {
    const response = await fetch(`http://localhost:3000/produto/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar produto');

    const produto = await response.json();

    document.querySelector('.foto__produto__principal').src = produto.Imagens;
    document.querySelector('.nome__produto__principal').textContent = produto.Nome;
    document.querySelector('.valor__produto__principal').textContent = `R$${produto.Preco.toFixed(2)}`;
    document.querySelector('.descricao__produto__principal').textContent = produto.Descricao;
  } catch (error) {
    console.error('Erro ao carregar produto:', error);
  }
}
document.getElementById('produtoForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const NomeProduto = document.getElementById('NomeProduto').value;
  const ValorProduto = document.getElementById('ValorProduto').value;
  const DescricaoProduto = document.getElementById('DescricaoProduto').value;
  const ImgProduto = document.getElementById('ImgProduto').value;

  const produtoData = { NomeProduto, ValorProduto, DescricaoProduto, ImgProduto };

  try {
    const response = await fetch('http://localhost:3000/produto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produtoData),
    });

    if (response.ok) {
      alert('Produto criado com sucesso!');
      document.getElementById('produtoForm').reset();
    } else {
      const errorMessage = await response.text();
      alert(`Erro ao criar produto: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao criar produto');
  }
});

document.getElementById('btnAtualizar').addEventListener('click', async function () {
  const IdProduto = document.getElementById('IdProduto').value;
  const NomeProduto = document.getElementById('NomeProduto').value;
  const ValorProduto = document.getElementById('ValorProduto').value;
  const DescricaoProduto = document.getElementById('DescricaoProduto').value;
  const ImgProduto = document.getElementById('ImgProduto').value;

  if (!IdProduto) {
    alert('Por favor, insira o ID do produto para atualizar.');
    return;
  }

  const produtoData = { NomeProduto, ValorProduto, DescricaoProduto, ImgProduto };

  try {
    const response = await fetch(`http://localhost:3000/produto/${IdProduto}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produtoData),
    });

    if (response.ok) {
      alert('Produto atualizado com sucesso!');
      document.getElementById('produtoForm').reset();
    } else {
      const errorMessage = await response.text();
      alert(`Erro ao atualizar produto: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao atualizar produto');
  }
});

document.getElementById('btnApagar').addEventListener('click', async function () {
  const IdProduto = document.getElementById('IdProduto').value;

  if (!IdProduto) {
    alert('Por favor, insira o ID do produto para apagar.');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/produto/${IdProduto}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Produto apagado com sucesso!');
      document.getElementById('produtoForm').reset();
    } else {
      const errorMessage = await response.text();
      alert(`Erro ao apagar produto: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao apagar produto');
  }
});
function filterItems(type, value) {
  document.querySelectorAll('.Estilo-Posicao').forEach(item => {
    item.style.display = (item.dataset[type] === value || value === 'Todos') ? 'block' : 'none';
  });
}

function showAllItems() {
  document.querySelectorAll('.Estilo-Posicao').forEach(item => {
    item.style.display = 'block';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  showAllItems();
});

function searchItems() {
  const searchQuery = document.querySelector('.search-box input').value.toLowerCase();
  document.querySelectorAll('.Estilo-Posicao').forEach(item => {
    const itemName = item.querySelector('.Nome').textContent.toLowerCase();
    item.style.display = (itemName.includes(searchQuery) || searchQuery === '') ? 'block' : 'none';
  });
}

document.querySelector('.search-box input').addEventListener('input', searchItems);
document.querySelector('.search-box input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchItems();
  }
});

document.querySelectorAll('.Estilo-Posicao').forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.querySelector('.Nome').textContent.trim();
    const itemUrl = urlMap[itemName];
    if (itemUrl) {
      window.location.href = itemUrl;
    } else {
      console.warn('URL não encontrada para o item:', itemName);
    }
  });
});

document.querySelectorAll('.Estilo-Posicao').forEach(item => {
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      item.click();
    }
  });
});

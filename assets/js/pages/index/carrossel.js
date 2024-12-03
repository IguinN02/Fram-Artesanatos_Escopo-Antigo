async function carregarProdutos(tipo = '') {
	try {
		const url = tipo ? `http://localhost:3000/produto?tipo=${tipo}` : 'http://localhost:3000/produto';
		const response = await fetch(url);
		if (!response.ok) throw new Error('Erro ao buscar produtos');

		const produtos = await response.json();
		const mainContainer = document.querySelector(tipo ? '.swiper-wrapper.mais__vendidos' : '.swiper-wrapper');

		produtos.forEach(produto => {
			mainContainer.insertAdjacentHTML('beforeend', gerarProdutoHTML(produto));
		});

		inicializarSwiper(tipo);

	} catch (error) {
		console.error('Erro ao carregar produtos:', error);
	}
}

function gerarProdutoHTML(produto) {
	return `
    <div class="swiper-slide">
      <a class="carrossel__imagens" href="produtos.html?id=${produto.IDproduto}">
        <img class="img_produto" src="${produto.Imagens}" alt="Foto do Produto" />
      </a>
      <div class="infos__produto">
        <a class="titulo__produto color" href="produtos.html?id=${produto.IDproduto}">${produto.Nome}</a>
        <a class="descricao__produto" href="produtos.html?id=${produto.IDproduto}">${produto.Descricao}</a>
        <a class="valor__produto color" href="produtos.html?id=${produto.IDproduto}">R$${produto.Preco.toFixed(2)}</a>
        <button class="adicionar__carrinho">Adicionar ao Carrinho</button>
      </div>
    </div>
  `;
}

function inicializarSwiper(tipo = '') {
	const swiperConfig = {
		spaceBetween: 25,
		slidesPerView: window.matchMedia("(max-width: 1024px)").matches ? 2 : 3,
		centeredSlides: true,
		loop: true,
		pagination: {
			clickable: true,
			el: tipo ? ".swiper-pagination.mais__vendidos" : ".swiper-pagination",
			type: "bullets",
		},
		navigation: {
			nextEl: tipo ? ".swiper-button-next.mais__vendidos" : ".swiper-button-next",
			prevEl: tipo ? ".swiper-button-prev.mais__vendidos" : ".swiper-button-prev",
		},
	};

	const swiperSelector = tipo ? ".swiper.mais__vendidos" : ".swiper";
	let swiperInstance = Swiper.instances?.[swiperSelector];

	if (swiperInstance) {
		swiperInstance.destroy(true, true);
	}

	new Swiper(swiperSelector, swiperConfig);
}

document.addEventListener("DOMContentLoaded", () => {
	carregarProdutos();
	carregarProdutos('vendidos');
});
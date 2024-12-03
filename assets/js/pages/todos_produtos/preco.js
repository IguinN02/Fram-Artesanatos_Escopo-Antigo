class PrecoBotao {
	constructor(MobilePreco) {
		this.MobilePreco = document.querySelector(MobilePreco);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.MobilePreco.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.MobilePreco.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.MobilePreco) {
			this.addClickEvent();
		}
		return this;
	}
}

const precoBotao = new PrecoBotao(".borda__preco", ".lista__preco");
precoBotao.init();

const preco = document.querySelector(".botao__preco");
const botaopreco = document.querySelector(".subsubbotao");

preco.addEventListener("click", () => botaopreco.classList.toggle("active"));
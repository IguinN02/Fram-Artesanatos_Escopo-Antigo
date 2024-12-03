class FiltroBotao {
	constructor(MobileFiltro) {
		this.MobileFiltro = document.querySelector(MobileFiltro);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.MobileFiltro.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.MobileFiltro.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.MobileFiltro) {
			this.addClickEvent();
		}
		return this;
	}
}

const filtroBotao = new FiltroBotao(".borda__filtro", ".lista__filtro");
filtroBotao.init();

const filtro = document.querySelector(".botao__filtro");
const botaoFiltro = document.querySelector(".filtro");

filtro.addEventListener("click", () => botaoFiltro.classList.toggle("active"));
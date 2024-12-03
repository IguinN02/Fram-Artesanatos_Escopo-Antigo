class TipoBotao {
	constructor(MobileTipo) {
		this.MobileTipo = document.querySelector(MobileTipo);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.MobileTipo.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.MobileTipo.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.MobileTipo) {
			this.addClickEvent();
		}
		return this;
	}
}

const tipoBotao = new TipoBotao(".borda__tipo", ".lista__tipo");
tipoBotao.init();

const tipo = document.querySelector(".botao__tipo");
const botaotipo = document.querySelector(".subbotao");

tipo.addEventListener("click", () => botaotipo.classList.toggle("active"));
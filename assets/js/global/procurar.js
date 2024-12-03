class ProcurarBotao {
	constructor(MobileProcurar) {
		this.MobileProcurar = document.querySelector(MobileProcurar);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.MobileProcurar.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.MobileProcurar.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.MobileProcurar) {
			this.addClickEvent();
		}
		return this;
	}
}

const procurarBotao = new ProcurarBotao(".borda__procurar", ".lista__procurar");
procurarBotao.init();

const procurar = document.querySelector(".botao__procurar");
const botaoprocurar = document.querySelector(".botaoProcurar");

procurar.addEventListener("click", () => botaoprocurar.classList.toggle("active"));
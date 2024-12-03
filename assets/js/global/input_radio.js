function aoSelecionarInput(event) {
  const inputClicado = event.target;

  function removeSelecao() {
    inputClicado.checked = false;
  }

  inputClicado.addEventListener("click", removeSelecao, {
    once: true,
  });
}
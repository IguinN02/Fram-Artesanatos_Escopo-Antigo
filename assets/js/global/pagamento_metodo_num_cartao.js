function formatPhone(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})(\d)/g, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  return value;
}

function applyPhoneMask(event) {
  let input = event.target;
  input.value = formatPhone(input.value);
}

function formatVali(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "$1/$2");
  return value;
}

function applyVformatValiMask(event) {
  let input = event.target;
  input.value = formatVali(input.value);
}

function formatNum(value) {
  value = value.replace(/\D/g, "");
  return value;
}

function applyVformatNumMask(event) {
  let input = event.target;
  input.value = formatNum(input.value);
}

function formatCep(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/g, "$1-$2");
  return value;
}

function applyVformatCepMask(event) {
  let input = event.target;
  input.value = formatCep(input.value);
}

function formatTel(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

function applyVformatTelMask(event) {
  let input = event.target;
  input.value = formatTel(input.value);
}

document.getElementById("senha").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("0123456789qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$".indexOf(chr) < 0)
    return false;
};

document.getElementById("confirma_senha").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("0123456789qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$".indexOf(chr) < 0)
    return false;
};

document.getElementById("senha__antiga").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("0123456789qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$".indexOf(chr) < 0)
    return false;
};
function togglePaymentMethod() {
  const isCartao = $('#input_cartao').is(':checked');
  const isPix = $('#input_pix').is(':checked');

  if (isCartao) {
    $('.div_pix').fadeOut(300, function () {
      $('.div_cartao').fadeIn(300);
    });
  }

  else if (isPix) {
    $('.div_cartao').fadeOut(300, function () {
      $('.div_pix').fadeIn(300);
    });
  }
}

$(document).ready(function () {
  $('#input_cartao').prop('checked', true);
  togglePaymentMethod();
  $('.div_cartao').fadeIn(300);
});

$('input[name="shipping"]').change(togglePaymentMethod);
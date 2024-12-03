$("#opcao__sobre").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#sobre_nos").offset().top - $(window).width() * 0.08,
    },
    1000
  );
});

$("#opcao__contato").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contato").offset().top - $(window).width() * 0.08,
    },
    1000
  );
});
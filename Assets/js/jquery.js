$(document).ready(function() {
    $("#busqueda").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  $('#btn-tema').click(function() {
    $('body').toggleClass('oscuro claro');
    $('.navbar').toggleClass('bg-dark bg-light');
    $('.navbar').toggleClass('navbar-dark navbar-light');
    $(".card").toggleClass(`bg-dark bg-light`)
    $(".card").toggleClass(`text-white text-black`)
    var textoBoton = $('#btn-tema').text();
    if (textoBoton === 'Claro') {
      $('#btn-tema').text('Oscuro');
    } else {
      $('#btn-tema').text('Claro');
    }
  });
  
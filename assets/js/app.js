$(document).ready(function() {
/**
 * Función de la vista splash inicial
 *
 */
$().ready(function() {
  $('.inicial').hide();
  $("#splash").fadeIn(500).fadeOut(5000, show);

  function show() {
    $('.inicial').show();
  }
});

/**
 * Función para avanzar a la siguiente sección
 *
 */
$('#signUp').click(function() {
  $('#form').show();
  $('#inicial').hide();
})

/**
 * Función para ir a la sección anterior
 */
$('#return').click(function() {
  $('#inicial').show();
  $('#form').hide();
})


/**
 * Función del input de registro
 *
 */
$('.search-panel .dropdown-menu').find('a').click(function(e) {
  e.preventDefault();
  var param = $(this).attr("href").replace("#", "");
  var concept = $(this).text();
  $('.search-panel span#search_concept').text(concept);
  $('.input-group #search_param').val(param);
});

/**
 * Función para desabilitar y habilitar boton
 */
$('#number').keyup(function() {
  var value = $('#number').val().length;
  if (value === 10) {
    $('#btn-next').removeClass('disabled')
  }
  if (value > 10 || $('#number').val() == '') {
    $('#btn-next').addClass('disabled');
  }
});
/**
 * Alerta con código aleatorio
 */
$(function() {
  $('#btn-next').click(function(result) {
    $('#number').val('');
    $('#btn-next').addClass('disabled');
    var result = 1; //test the output message
    var success = '<div class="alert alert-success fade in" role="alert">'
    var success = '<div class="alert alert-success fade in" role="alert">' +
      '<a class="close" data-dismiss="alert">&times</a>' +
      '<strong><span class="glyphicon glyphicon-ok"></span> Tu código es: ' +
      '<span style="font-size: 2em">LAB-</span><span style="font-size: 2em" id="numero-aleatorio" style="text-align:center;"> </span>' +
    '</strong>' +
    '<div><a style="margin-top: 2em; " id="btn-ok" class="btn btn-default">OK!</a></div>';
    var output = success;
    $('#alert-dialogue').append(output);

    numeroAleatorio(1, 100);
  });

  numeroAleatorio(1, 100);

  function numeroAleatorio(min, max) {
    var num = Math.round(Math.random() * (max - min) + min);
    $('#numero-aleatorio').text(num);
  }
});

/**
 * Función para avanzar a la siguiente sección
 *
 */
$('#btn-ok').click(function() {
  $('#form').hide();
  $('#verify').show();
})

/**
 * Función para ir a la sección anterior
 */
$('#return-2').click(function(){
  $('#form').show();
  $('#verify').hide();
})

});

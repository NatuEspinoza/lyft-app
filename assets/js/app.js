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
  if (isNaN($('#number').val())){
    $('#alert').html('<h3 style="color: #ff00bf;">Favor ingresar sólo números!</h3>');
    $('#btn-next').addClass('disabled');
  }  else{
      $('#alert').text('');
  }
  return false;
});
/**
 * Alerta con código aleatorio
 */
$(function() {
  $('#btn-next').click(function(result) {
    $('#number').val('');
    $('#btn-next').addClass('disabled');
    $('#btn-ok').show();
    var result = 1; //test the output message
    var success = '<div class="alert alert-success fade in" role="alert">'
    var success = '<div class="alert alert-success fade in" role="alert">' +
      '<a class="close" data-dismiss="alert">&times</a>' +
      '<strong><span class="glyphicon glyphicon-ok"></span> Tu código es: ' +
      '<span style="font-size: 2em">LAB-</span><span style="font-size: 2em" id="numero-aleatorio" style="text-align:center;"> </span>' +
    '</strong>';
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

/**
 * Función para habilitar botón de la sección de verify
 */
 /**
  * Función para desabilitar y habilitar boton
  */
 $('#codigo').keyup(function() {
   var value = $('#codigo').val().length;
   if (value <=3) {
     $('#btn-next2').removeClass('disabled')
   }
   if (value >3 || $('#codigo').val() == ''){
     $('#btn-next2').addClass('disabled');
   }
   if (isNaN($('#codigo').val())){
     $('#alert2').html('<h3 style="color: #ff00bf;">Favor ingresar sólo números!</h3>');
     $('#btn-next2').addClass('disabled');
   }  else{
       $('#alert2').text('');
   }
   return false;
 });

 /**
  * Función para botón NEXT para avanzar a la sección del formulario sign up
  */
 $('#btn-next2').click(function(){
   $('#verify').hide();
   $('#form-signUp').show();
 })
 /**
  * Función para regresar a la sección de Verify
  */
  $('#return-3').click(function(){
    $('#verify').show();
    $('#form-signUp').hide();
  })

});

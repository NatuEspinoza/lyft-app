$(document).ready(function() {
  /**
   * Función de la vista splash inicial
   *
   */
  $().ready(function() {
    $('.inicial').hide();
    $("#splash").fadeIn(500).fadeOut(5000, show);
    function show (){
      $('.inicial').show();
    }
  });

  /**
   * Función para registrarse
   *
   */
  $('#signUp').click(function(){
    $('#form').show();
    $('#inicial').hide();
  })
  /**
   * Función para ir a la vista anterior
   */
  $('#return').click(function(){
    $('#inicial').show();
    $('#form').hide();
  })

  /**
   * Función del input de registro
   *
   */
   $('.search-panel .dropdown-menu').find('a').click(function(e) {
 		e.preventDefault();
 		var param = $(this).attr("href").replace("#","");
 		var concept = $(this).text();
 		$('.search-panel span#search_concept').text(concept);
 		$('.input-group #search_param').val(param);
 	});

  /**
   * Función para desabilitar y habilitar boton
   */
  $('#number').keyup(function(){
    var value = $('#number').val().length;
    if (value === 10) {
      $('#btn-next').removeClass('disabled')
    } if (value > 10) {
      $('#btn-next').addClass('disabled');
    }
  });
})

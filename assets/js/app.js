$(document).ready(function() {

  // Initializes plugins
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();

  // Gets content of active menu tab
  $('nav li.tab a').click(function(e){
    if (!$(this).parent("li").hasClass("disabled")) {
      var tab_id = $(this).attr('id');
      $('nav li.tab a').removeClass('active');
      $(this).addClass('active');
      $('.content div.tab-container').hide();
      $('.content div.tab-container#' + tab_id + '-tab').show();
    }
  });

  // Activates inCall state
  $('#callBtn').click(function() {
    $(this).addClass('disabled');
    $('#callDisplay').show();
  });

});

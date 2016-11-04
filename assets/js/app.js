$(document).ready(function() {

  // Plugin initialization
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $("select").material_select();

  // Get content of active menu tab
  $('nav li.tab a').click(function(e){
    if (!$(this).parent("li").hasClass("disabled") && !$(this).parent("li").hasClass("dropdown")) {
      var tab_id = $(this).attr('id');
      $('nav li.tab a').removeClass('active');
      $(this).addClass('active');
      $('.content div.tab-container').hide();
      $('.content div.tab-container#' + tab_id + '-tab').show();
    }
  });
  // Set initial tab
  $('nav li.tab').find('.active').trigger('click');

  // Activate inCall state
  $('#callBtn').click(function() {
    $('.input-field *:not(#msgBtn)').addClass('disabled');
    $('#callDisplay').show();
    $(".callStatusHolder").addClass("connected");
    $("#callStatus").text("Connected");
    $("#callTime").text("00:20");
  });

});

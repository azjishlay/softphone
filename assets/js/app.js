$(document).ready(function() {

  // Plugin initialization
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $("select").material_select();

  // Get content of active menu tab
  $('nav li.tab a, .side-nav li a').click(function(e){

    if (!$(this).parent("li").hasClass("disabled") && !$(this).parent("li").hasClass("dropdown")) {

      // Reset tabs
      $('nav li.tab a, .side-nav li a').removeClass('active');
      $('nav li.tab, .side-nav li').removeClass('selected');

      // Make tab active
      $(this).addClass('active');
      $(this).parent().addClass('selected');

      // Show content
      var tab_id = $(this).attr('id');
      $('.content div.tab-container').hide();
      $('.content div.tab-container#' + tab_id + '-tab').show();
    }
  });
  // Set initial tab
  $('nav li.tab').find('.active').trigger('click');

  // Activate inCall state
  $('#callBtn').click(function() {
    $('.input-field *').addClass('disabled').prop('disabled', function(i, v) { return !v; });
    $(".row.step3").show();
    $(".callStatusHolder").addClass("connected");
    // $("#callStatus").text("Connected");
    // $("#callTime").text("00:20");
  });

});

//= require jednotka/jquery/jquery.min.js
//= require jednotka/jquery/jquery.mobile.custom.min.js
//= require jednotka/bootstrap/bootstrap.min.js
//= require jednotka/plugins/modernizr/modernizr.custom.min.js
//= require jednotka/plugins/hover_dropdown/twitter-bootstrap-hover-dropdown.min.js
//= require jednotka/plugins/retina/retina.min.js
//= require jednotka/plugins/knob/jquery.knob.js
//= require jednotka/plugins/isotope/jquery.isotope.min.js
//= require jednotka/plugins/isotope/jquery.isotope.sloppy-masonry.min.js
//= require jednotka/plugins/validate/jquery.validate.min.js
//= require jednotka/plugins/flexslider/jquery.flexslider.min.js
//= require jednotka/plugins/countdown/countdown.js
//= require jednotka/plugins/nivo_lightbox/nivo-lightbox.min.js
//= require jednotka/plugins/cycle/jquery.cycle.all.min.js
//= require jednotka/jednotka.js



var offset = 150;

$('#navbar-main .nav li a').click(function(event) {
  debugger
    var href = $(this).attr('href')
    if(href.startsWith('#')) {
      event.preventDefault();
      $('#navbar-main .nav li').removeClass('active')
      $(href)[0].scrollIntoView();
      scrollBy(0, -offset);
    }

});



jQuery(document).ready(function($) {


      $('.show-more').on('click', function(event) {
        event.preventDefault();
        var $holder = $(this).closest('.holder')
        console.log($holder.find('.less'))
        $holder.find('.less').hide()
        $holder.find('.more').show()
        $(this).hide()

    });
      $('#carousel-case-study').flexslider({
        animation: "slide"
      });


});





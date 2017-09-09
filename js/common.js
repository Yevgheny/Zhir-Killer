$(function() {

    new WOW().init();


    // Smooth Scroll to block
    $('a[href^="#packages"],a[href^="#part-format"], a[href^="#faq"], a[href^="#main-header"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
function mobileMenu(){
    $('.open-mobile-menu').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      var button = $(this);
      button.toggleClass('open');
    });
}
$( document ).ready(function() {
  mobileMenu();
});
$( ".open-mobile-menu" ).click(function() {
    $( "#mob-menu" ).slideToggle( 200, function() {
    });
});
$(document).ready(function() {

    //nav-menu
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function(){
        $(".overlay").fadeToggle(200);   
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
    
    $('#results-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
        dots: false,
        items: 1
    });

      $('#slider-1').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
});
     
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   
 
        var w_top = $(window).scrollTop();        
        var e_top = $(countbox).offset().top;     
 
        var w_height = $(window).height();        
        var d_height = $(document).height();     
 
        var e_height = $(countbox).outerHeight(); 
 
        if(w_top + 750 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                from: 0,
                thousandSeparator: " ",
                duration: 1300
            });
 
            show = false;
        }
    });

    

  });





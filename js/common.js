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


$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();

$(document).ready(function() { 

    (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
            
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);    

});
$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .faq-accordion-content').not($content).slideUp('fast');
});

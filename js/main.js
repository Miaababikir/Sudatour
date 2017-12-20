// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {

        $("#carousel").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]

        });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    // Card
    $(window).load(function() {
        $('.post-module').hover(function() {
            $(this).find('.description').stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300);
        });
    });

    // City page places portfolio
    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');

            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');

            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

    });

    //Home page portfolio card
    $(document).ready(function(){
        var zindex = 10;

        $("div.card").click(function(e){
            e.preventDefault();

            var isShowing = false;

            if ($(this).hasClass("show")) {
                isShowing = true
            }

            if ($("div.cards").hasClass("showing")) {
                // a card is already in view
                $("div.card.show")
                    .removeClass("show");

                if (isShowing) {
                    // this card was showing - reset the grid
                    $("div.cards")
                        .removeClass("showing");
                } else {
                    // this card isn't showing - get in with it
                    $(this)
                        .css({zIndex: zindex})
                        .addClass("show");

                }

                zindex++;

            } else {
                // no cards in view
                $("div.cards")
                    .addClass("showing");
                $(this)
                    .css({zIndex:zindex})
                    .addClass("show");

                zindex++;
            }

        });
    });


}());


}
main();
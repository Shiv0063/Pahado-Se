/*
Theme Name: Mrittik Architecture Theme
Version: 1.0
Author: WPThemeBooster
Author URI: 
Description: Mrittik is a Modern Architecture Theme
*/
/*	IE 10 Fix*/

(function ($) {
	'use strict';

    

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	
	jQuery(document).ready(function () {
        
        //Hide Loading Box (Preloader)
        if($('.loader-wrap').length){
            $('.loader-wrap').delay(1000).fadeOut(500);
        }

        if ($(".preloader-close").length) {
            $(".preloader-close").on("click", function(){
                $('.loader-wrap').delay(200).fadeOut(500);
            })
        }


        // Sticky Header
        // var header = $("header");
        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();

        //     if (scroll >= 50) {
        //         header.addClass("sticky");
        //     } else {
        //         header.removeClass("sticky");
        //     }
        // });

        // Tilt Effect
        $(".slider .sl-image").tilt({
            maxTilt: 15,
            perspective: 1400,
            easing: "cubic-bezier(.03,.98,.52,0)",
            speed: 1200,
            glare: true,
            maxGlare: 0,
            scale: 1.05,
            reset: true
        });

        var swiper = new Swiper(".mySwiper2", {
            spaceBetween: 0,
            slidesPerView: 1,
            autoplay: true,
            breakpoints: {
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                992: {
                  slidesPerView: 4,
                  spaceBetween: 30
                }
              }
        });

        // Funfacts
        var a = 0;
        $(window).scroll(function() {

            var oTop = $('#funfacts').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.fun-number').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    });      
})(jQuery);

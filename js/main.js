(function ($) {
    "use strict";

    $(window).on('load', function(){
        $('body').css({ overflowY: 'hidden'});
        setTimeout(function(){
            $('#preload-content').fadeOut(2000, function(){
                $('#preload').fadeOut(2000);
                $('body').css({ overflowY: 'visible'});
                setTimeout(function(){
                    $('.fade-in').each(function(index) {
                        $(this).delay(2000*index).animate({ top : 0, opacity: 1 }, 2000);
                    });
                }, 2000);
            });
        }, 2000);
    });      
    
	jQuery(document).ready(function($){ 
        
        //for stop wow js
        var windowWidth = $(window).width();
        if( windowWidth < 768 ) {
            $('*').removeClass('wow');
        }
        console.log(windowWidth);
        
        //sticky menu
        $(".header-area").sticky({topSpacing:0});
        
        //smooth scroll
        $('.navbar-nav li a').on('click', function(event) {
            var $anchor = $($(this).attr('href')).offset().top - 80;
            $('body, html').animate({scrollTop : $anchor}, 600);
            return false;
            event.preventDefault();
        });
        
        //owl-carousel for speech area
		$(".speech-slider").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive : {
                320 : {
                    items:1,
                    autoplay:false
                },
                480 : {
                    items:1,
                    autoplay:false
                },
                768 : {
                    items:1
                },
                1024 : {
                    items:1
                },
                1366 : {
                    items:1
                }
            }
        });
        
        //owl carousel for branding area
		$(".branding-slider").owlCarousel({
            items:6,
            loop:true,
            margin:130,
            autoplay:true,
            responsive : {
                320 : {
                    items:2,
                    margin:100,
                    autoplay:false
                },
                480 : {
                    items:3,
                    autoplay:false
                },
                768 : {
                    items:4
                },
                1024 : {
                    items:5
                },
                1366 : {
                    items:6
                }
            }
        });
        
        // this code is for venobox
        $(".vide_area_venobox").venobox({
            titleattr: 'data-title',
            framewidth: '970px',        // default: ''
            frameheight: '500px',
        });
        
        //For equal height
        var height = $('.about-content-area').height();
        $('.contact-address').css('height', height + 320 + 'px');
        
        var height = $('.purchase-content-area').height();
        $('.contact-form').css('height', height + 509 + 'px');
        
        
        var $portfolio = $('.portfolio-items');
        
        $portfolio.isotope({
            itemSelector: '.p-items',
            layoutMode: 'masonry',
            filter: '*',
        });
        
        $('.filter-menu li').click(function(){
            $('.filter-menu li').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector,
            });
        });
        
        // jQuery Lightbox
        $('.lightbox').venobox({     
            titleattr: 'data-title',        
            border: '10px', 
        });
        
        //creative slider version
        $(".creative-slider").owlCarousel({
            items:1,
            autoplay:true,
            autoplayTimeout:4000,
            loop:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
        
    });
    
    

	
})(jQuery);


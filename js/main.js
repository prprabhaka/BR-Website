(function ($) {
    "use strict";
    var windowOn = $(window);

    /* Windows Load */
    $(window).on('load', function () {
        wowAnimation();
    });

    /* Wow Active */
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /* Body overlay Js */
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /* Data Css js */
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    $(document).ready(function () {
        // button style
        $('.rs-button-wrapper .rs-btn').mouseenter(function () {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffect 0.5s');
        });
        $('.rs-button-wrapper .rs-btn').mouseleave(function () {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffectReverse 0.5s');
        });		
		
		function openMenu(menuId){
			$("html, body").animate({scrollTop:0},600);
			setTimeout(function(){
				var menu = new bootstrap.Collapse("#mainMenu",{toggle:false});
				menu.show();
				setTimeout(function(){
					var dropdown = new bootstrap.Dropdown(document.getElementById(menuId));
					dropdown.show();
				},300);
			},600);
		}
		$(".industryExplore").click(function(e){
			e.preventDefault();
			openMenu("industryMenu");
		});
		$(".techExplore").click(function(e){
			e.preventDefault();
			openMenu("technologiesMenu");
		});
		
		document.addEventListener("DOMContentLoaded", function () {
		  const video = document.querySelector(".bg-video");
		  video.muted = true;
		  video.play().catch(()=>{});
		});

        // Swiper Dynamic Slider Active
        $('.rs-swiper .swiper').each(function (index) {
            var $swiper = $(this);
            var hoverAutoplay = $swiper.data('hover-pause') === undefined ? true : $swiper.data('hover-pause');
            var loop = $(this).data('loop') === undefined ? true : $(this).data('loop');
            var centeredSlides = $(this).data('center-mode') === undefined ? false : $(this).data('center-mode');
            var autoplay = $(this).data('autoplay') === undefined ? true : $(this).data('autoplay');
            var dynamicBullets = $(this).data('dots-dynamic') === undefined ? true : $(this).data('dots-dynamic');
            var direction = $(this).data('direction') === 'vertical' ? 'vertical' : 'horizontal';
            var fridgeMovement = $(this).data('play-slide') === undefined ? true : $(this).data('play-slide');
            var effect = $(this).data('effect') || 'slide'; //'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
            var grabCursor = $(this).data('grab-cursor') === undefined ? false : $(this).data('grab-cursor');
            var oneWayMovement = $(this).data('one-way') === undefined ? false : $(this).data('one-way');
            var startAt = $(this).data('start-at');
            var slidesPerView = $(this).data('item');
            var speed = $(this).data('speed');
            var gap = (($(this).data('no-gap') === true) ? 0 : 30);
            var margin = ($(this).data('margin') ? $(this).data('margin') : gap);

            // Breakpoints
            var slidesPerViewXl = $(this).data('item-xl');
            var slidesPerViewLg = $(this).data('item-lg');
            var slidesPerViewMd = $(this).data('item-md');
            var slidesPerViewSm = $(this).data('item-sm');
            var slidesPerViewXs = $(this).data('item-xs');
            var slidesPerViewMobile = $(this).data('item-mobile');
            var marginXl = ($(this).data('margin-xl') ? $(this).data('margin-xl') : margin);
            var marginLg = ($(this).data('margin-lg') ? $(this).data('margin-lg') : marginXl);
            var marginMd = ($(this).data('margin-md') ? $(this).data('margin-md') : marginLg);
            var marginSm = ($(this).data('margin-sm') ? $(this).data('margin-sm') : marginMd);
            var marginXs = ($(this).data('margin-xs') ? $(this).data('margin-xs') : marginSm);
            var marginMobile = ($(this).data('margin-mobile') ? $(this).data('margin-mobile') : marginXs);

            // Controls unique classes based on the index
            var rsNavPrev = `rs-nav-prev-${index}`;
            var rsNavNext = `rs-nav-next-${index}`;
            $swiper.closest('.rs-swiper').find('.swiper-button-prev').addClass(rsNavPrev);
            $swiper.closest('.rs-swiper').find('.swiper-button-next').addClass(rsNavNext);

            var rsPagination = `rs-pagination-${index}`;
            $swiper.closest('.rs-swiper').find('.swiper-pagination').addClass(rsPagination);

            var swiper = new Swiper(this, {
                loop: loop,
                autoplay: autoplay,  // data-autoplay="true" => Delay | .swiper-slide | data-swiper-autoplay="2000">
                direction: direction,
                effect: effect,
                enabled: fridgeMovement,
                grabCursor: grabCursor,
                oneWayMovement: oneWayMovement,
                centeredSlides: centeredSlides,
                initialSlide: (startAt ? startAt : 0),
                slidesPerView: (slidesPerView ? slidesPerView : 1),
                spaceBetween: margin,
                speed: (speed ? speed : 500),
                pagination: {
                    el: `.${rsPagination}`,
                    dynamicBullets: dynamicBullets,
                    clickable: true,
                },

                navigation: {
                    nextEl: `.${rsNavNext}`,
                    prevEl: `.${rsNavPrev}`,
                },

                breakpoints: {
                    10: {
                        slidesPerView: (slidesPerViewMobile ? slidesPerViewMobile : 1),
                        spaceBetween: marginMobile,
                    },
                    481: {
                        slidesPerView: (slidesPerViewXs ? slidesPerViewXs : 1),
                        spaceBetween: marginXs,
                    },
                    576: {
                        slidesPerView: (slidesPerViewSm ? slidesPerViewSm : 1),
                        spaceBetween: marginSm,
                    },
                    768: {
                        slidesPerView: (slidesPerViewMd ? slidesPerViewMd : 1),
                        spaceBetween: marginMd,
                    },
                    992: {
                        slidesPerView: (slidesPerViewLg ? slidesPerViewLg : 1),
                        spaceBetween: marginLg,
                    },
                    1025: {
                        slidesPerView: (slidesPerViewXl ? slidesPerViewXl : 1),
                        spaceBetween: marginXl,
                    },
                    1201: {
                        slidesPerView: (slidesPerView ? slidesPerView : 1),
                        spaceBetween: margin,
                    }
                }
            });
			// Play video fully before moving to next slide
			function playVideo() {
				var currentSlide = swiper.slides[swiper.activeIndex];
				var video = currentSlide.querySelector("video");
				if(video){
					// reset all videos
					document.querySelectorAll('.rs-banner-bg-video video').forEach(v=>{
						v.pause();
						v.currentTime = 0;
					});
					video.play();
					video.onended = function () {
						swiper.slideNext();
					};
				}
			}
			// first video play
			playVideo();
			// next slide video play
			swiper.on('slideChangeTransitionEnd', function () {
				playVideo();
			});
            /* if (hoverAutoplay) {
				$swiper.on('mouseenter', function () {
					swiper.autoplay.stop();
				}).on('mouseleave', function () {
					swiper.autoplay.start();
				});
			} */
        });

		/* product active */
		var productDetails = new Swiper(".product-details-nav", {
			spaceBetween: -20,
			slidesPerView: 4,
			navigation: {
				nextEl: ".product-details-button-next",
				prevEl: ".product-details-button-prev",
			},
		});

		/* product small thumb active */
		var productDetailsActive = new Swiper(".product-details-active", {
			spaceBetween: 0,
			thumbs: {
				swiper: productDetails,
			},
			navigation: {
				nextEl: ".product-details-button-next",
				prevEl: ".product-details-button-prev",
			},
		});         

		/* row remove activation */
		$('.removeRow').on('click', function () {
			$(this).closest('tr').remove();
		});

		/* Show Login Toggle Js */
		$('.checkout-login-form-reveal-btn').on('click', function () {
			$('#checkout-coupon').slideToggle(400);
		});


        /* Button scroll up js */
        var progressPath = document.querySelector(".backtotop-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > offset) {
                $(".backtotop-wrap").addClass("active-progress");
            } else {
                $(".backtotop-wrap").removeClass("active-progress");
            }

			// sticky header
			var stickyHeader = $("#rs-sticky-header");
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 200) {
					stickyHeader.addClass("active");
				} else {
					stickyHeader.removeClass("active");
				}
			});
        });
		
        $(".backtotop-wrap").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, parseInt(duration, 10)); /* Fixing parseInt call with radix parameter */
            return false;
        });   
  
        //  hotspots
        jQuery('.rs-ripple-item').each(function(index) {
            var uniqueClass = 'rs-ripple-item-' + index;
            jQuery(this).addClass(uniqueClass);
            var parentHotspots = jQuery(this).closest('.rs-contact-wrapper');
            var targetMobileItem = parentHotspots.find('.mobile_item').eq(index);
            jQuery(this).on('click', function() {
                if (targetMobileItem.hasClass('active')) {
                    targetMobileItem.removeClass('active');
                } else {
                    parentHotspots.find('.mobile_item.active').removeClass('active');
                    targetMobileItem.addClass('active');
                }
            });
            parentHotspots.on('click', '.remove-icon', function(event) {
                event.stopPropagation();
                targetMobileItem.removeClass('active');
            });
        });

        // Ripple Class Switching
        var switches = jQuery('.rs-contact-wrapper .rs-ripple-item');
        var currentIndex = 0;
        var interval;
        var speed = 1500;

        function startRotation() {
            interval = setInterval(function() {
                switches.eq(currentIndex).removeClass('ripple');
                currentIndex = (currentIndex + 1) % switches.length;
                switches.eq(currentIndex).addClass('ripple');
            }, speed);
        }
        function stopRotation() {
            clearInterval(interval);
            switches.eq(currentIndex).removeClass('ripple');
        }
        startRotation();
        switches.on('mouseenter', function () {
            stopRotation();
        }).on('mouseleave', function () {
            startRotation();
        });
    });
	
	// Technologies Accordion Items
	window.toggleAccordion = function(index) {
		const items = document.querySelectorAll('.accordion-item');
		const images = document.querySelectorAll('.illustration-container img');
		items.forEach((item, i) => {
			if (i === index) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
		images.forEach((img, i) => {
			if (i === index) {
				img.classList.remove('opacity-0', 'scale-95');
				img.classList.add('opacity-100', 'scale-100');
			} else {
				img.classList.add('opacity-0', 'scale-95');
				img.classList.remove('opacity-100', 'scale-100');
			}
		});
	}

    // Active Accordion Items
    const accordionItems = document.querySelectorAll('.rs-accordion-item.has-border-active');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            accordionItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Smooth Scrolling
    if ($('.brt-smooth-scroll').length) {

        // Handle scroll animation for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                const id = el.getAttribute('href')?.slice(1)
                if (!id) return
                const target = document.getElementById(id)
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            })
        });
    }

    // Image scale active
    if ($('.rs-scale-item').length) {
        // Get all menu items
        const portfolio_items = document.querySelectorAll('.rs-scale-item');
        // Add event listeners to each item
        portfolio_items.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                // Remove the 'active' class from all items
                portfolio_items.forEach((portfolio_item) => {
                    portfolio_item.classList.remove('active');
                });
                // Add the 'active' class to the hovered item
                item.classList.add('active');
            });
        });
        portfolio_items[1].classList.add("active");
    };
	
})(jQuery);
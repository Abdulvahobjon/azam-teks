(function ($) {

    "use strict";


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $(".navigation-holder .close-navbar");
        var body = $(".page-wrapper");

        openBtn.on("click", function () {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
                body.addClass("body-overlay");
            }
            return false;
        })

        closeBtn.on("click", function () {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            body.removeClass("body-overlay");
            return false;
        })
    }

    toggleMobileNavigation();

    function getCurrentYear() {
        document.querySelector(".current_year").textContent = new Date().getFullYear();
        const experianse = document.querySelector("#experianse")

        if (experianse) {
            experianse.textContent = new Date().getFullYear() - 2009
        }

    }
    getCurrentYear()


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var doParallax = -(resize / 5);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }



    // SLIDER
    var menu = [];
    jQuery('.swiper-slide').each(function (index) {
        menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },

        watchSlidesProgress: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });



    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {
                //active wow
                wow.init();
            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function () {
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title': this.title,
                helpers: {
                    title: { type: 'inside' },
                    media: {}
                },

                beforeShow: function () {
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function () {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid = $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        }
    }

    // masonryGridSetting();


    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.site-header .navigation').length) {
        cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;
    }


    /*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("header-search-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = PROGRESS BAR
    -------------------------------------------*/
    function progressBar() {
        if ($(".progress-bar").length) {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function () {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
                }

            });
        };
    }

    progressBar();



    /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },

                550: {
                    items: 3
                },

                992: {
                    items: 4
                },

                1200: {
                    items: 5
                }
            }
        });
    }


    /*------------------------------------------
        = TESTIMONIALS SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            loop: true,
            autoplayHoverPause: true,
            items: 1
        });
    }


    /*------------------------------------------
        = PROJECTS SLIDER
    -------------------------------------------*/
    if ($(".projects-slider").length) {
        $(".projects-slider").owlCarousel({
            loop: true,
            // margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>'],
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },

                550: {
                    items: 2,
                    center: false,
                    margin: 10
                },

                892: {
                    items: 3
                },

                1200: {
                    items: 4
                },

                1400: {
                    items: 5
                }
            }
        });
    }


    /*------------------------------------------
        = TESTIMONIALS SLIDER S2    
    -------------------------------------------*/
    if ($(".testimonials-slider-s2").length) {
        $(".testimonials-slider-s2").owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },

                650: {
                    items: 2,
                    center: false,
                    margin: 15
                },

                1200: {
                    items: 2
                }
            }
        });
    }


    /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }


    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if ($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>'],
            dots: false,
            items: 1
        });
    }


    /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    $(document).ready(function () {
        if ($("#contact-form-main").length) {
            $("#contact-form-main").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: "required",
                    phone: "required",
                    subject: "required"
                },
                messages: {
                    name: "Iltimos, ismingizni kiriting",
                    email: "Iltimos, email manzilingizni kiriting",
                    phone: "Iltimos, telefon raqamingizni kiriting",
                    subject: "Please select your contact subject"
                },
                submitHandler: function (form) {
                    // Serialize form data
                    var formData = $(form).serialize();
    
                    // Ajax submission
                    handleTelegramIntegration(formData);
                    
                    // Reset form after successful submission
                    $(form)[0].reset();
    
                    return false; // Prevent the form from submitting normally
                }
            });
        }
    });    
    
    function handleTelegramIntegration(formData) {
        var telegram_bot_id = "7378527420:AAHmzqaGDy1zDt9Q43Efys7F0Uq8kvFw9WE"; // Replace with your Telegram bot ID
        var chat_id = "5824904653"; // Replace with your chat ID
        // 5824904653
        
        // Parse formData into key-value pairs
        var formDataArray = formData.split("&");
        var formDataObject = {};
        
        formDataArray.forEach(function(keyValue) {
            var pair = keyValue.split("=");
            formDataObject[pair[0]] = decodeURIComponent(pair[1]);
        });
        
        // Construct a readable message
        var message = "Malumotlar:\n\n" +
                      "Foydalanuvchi ismi: " + formDataObject.name + "\n" +
                      "Foydalanuvchi telefon raqami: " + formDataObject.phone + "\n" +
                      "Foydalanuvchi yozgan habar: " + formDataObject.note; // Adjust as per your form fields
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            document.querySelector("#message").textContent = "Malumot yuborildi, tez orada sizga aloqaga chiqishadi"

            setTimeout(() => {
                document.querySelector("#message").textContent = ""
            }, 3000);
        });
    }
    
    



    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();

        toggleMobileNavigation();

        smallNavFunctionality();

        sortingGallery();

    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

        if ($(".site-header").length) {
            stickyMenu($('.site-header .navigation'), "sticky-on");
        }

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {

        toggleClassForSmallNav();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));

    });

})(window.jQuery);



// const userData = await req.json();
//     // const botApiUrl = `https://api.telegram.org/bots${process.env.TELEGRAM_BOT_TOKEN}/${""}`

//     if (userData.firstName && userData.lastName && userData.phone && userData.message) {
//         const myChatId = "1802639780"
//         const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)


//         bot.start((ctx) => {
//             ctx.reply('Assalomu alaykum bizning websit: http://mayoq.uz');
//         });

//         // Botning asosiy qismi 

//         // Bot foydalanuvchilarning xabarlari ustida ishlaydi
//         bot.on('message', async (ctx) => {
//             // Check if the message contains the text property
//             if ('text' in ctx.message) {
//                 const message = ctx.message.text.toLowerCase(); // Foydalanuvchi xabarni kichik harflarga o'tkazamiz
//                 if (message !== "/start") {
//                     ctx.reply("Siz tasodifiy belgilar qatorini kiritganga o'xshaysiz. Hamma malumotni bizni vebsaytdan olishingiz mumkin: http://mayoq.uz");
//                 }
//             }
//         });



//         bot.telegram.sendMessage(myChatId, `
//             Name: ${userData.firstName} ${userData.lastName}
//             _______________________
//             Phone: ${userData.phone}
//             _______________________
//             Message: ${userData.message}
//         `);



//         // Botni ishga tushirish
//         bot.launch();

        
//         return NextResponse.json({
//             status: 200,
//             message: "success",
//             data: userData,
//         });
//     } else {
//         return NextResponse.json({
//             status: 400,
//             message: "Malumotni toliq kiriting",
//         });
//     }
$(document).ready(function () {
  
    /* var  $item = $('header .carousel-item');    
    var $li =$('.indicators li')

    for (let $li = 0; $li < $item.length; $li++) {
        $li.html($item[$li])  ;
        
    } */

    //organic-tabs

    $('.organic .nav a').on('click', function () {
        toggleClass('active');
    })



    $('.organic .tab-content .lazy ').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                }
            },

        ]
    });

    //organic-tabs
    //fruits 
    $('.fruits .nav li').on('click', function () {
        $('.fruits .nav li').removeClass('active');
        $(this).addClass('active');
    })
    //fruits 
    //naturix

    $('.naturix .multiple-items').slick({
        rows: 2,
        slidesToShow: 4,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                }
            },

        ]

    })

    //naturix end
    //****
    //organic-data start
    $('.organic-data .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
    })

    $('.organic-data .fresh').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })

    //organic-data end

    //taste start

    $('.taste  .arrivals-slider').slick({
        rows: 3,
        slidesToShow: 1,
        infinite: false,
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        speed: 300,
        responsive: [{
            breakpoint: 320,
            settings: {
                rows: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }],
    });

    //taste end
    //user-slider
    $('.users-slider').slick({
        slidesToShow: 2,
        infinite: true,
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    //user-slider

    //menu-fixed start
    var header = $('header');
    var menu = $('.menu-top');
    var flag = false;

    function menuFixed() {
        if(scrollY >= header.innerHeight() && !flag){
            menu.addClass('fix').css('opacity', 0).animate({
                opacity : '1'
            },500);
            header.css({
                paddingTop: menu.innerHeight()
            });
            flag = true;
        }
        else if (scrollY <= header.innerHeight() && flag){
            menu.animate({
                opacity: '0'
            },500, function () {
                menu.removeClass('fix').removeAttr('style');
                header.removeAttr('style');
            })

            flag = false;
        }
    }
    $(window).on('scroll',menuFixed);
    menuFixed();
    //menu-fixed end
    //***
    // scroll start
    var links = $('.navbar-nav a');
    links.on('click', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        var target = $(href).offset().top - 50
        $('html , body').animate({
            scrollTop: target

        }, 1000)
    })

    //11_Событие scroll start
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();

        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').on('click', function () {
        $('html , body').animate({
            scrollTop: 0

        }, 1000)
    });
    //11_Событие scroll end
    var div = document.querySelectorAll('.card ');
    var res = document.querySelector('.value');
    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener('click', function (e) {
            this.classList.toggle('item-ective');
            res.innerHTML = calc();
        });

    }

    function calc(params) {
        var sum = 0

        for (var i = 0; i < div.length; i++) {
            if (div[i].classList.contains('item-ective')) {
                sum = sum + +div[i].getAttribute('data-price');
            }

        }


        return sum;
    }
});
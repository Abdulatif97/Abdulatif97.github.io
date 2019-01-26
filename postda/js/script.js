$(document).ready(function () {
    
    var close = $('.faq .tab-content .tab-pane .content .close')
    var content = $('.faq .tab-content .tab-pane .content ')
    var open = $('.faq .nav .nav-item a');
    
    $('.main .intro .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 769,
            settings: {
             dots: false,
             arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

    });
    $('.video-news .video-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    
    open.on('click', function () {
        content.show();
    });
    close.on('click', function () {
        content.hide();
    });
    
   
    
    
    
    
});
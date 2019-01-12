$(document).ready(function () {
  
    
    
    $('.hotels .slider').slick({
      dots:true,
      infinite:true,
      speed:300,
      slidesToShow:3,
      variableWidth: false,
      autoplay: true,
      responsive: [{
          breakpoint:768,
          settings:{
              slidesToShow: 2
          }
        },
          {
          breakpoint:576,
          settings:{
              slidesToShow: 1
          }
      }]
    });
   
    
    
    var $gallery =   $('.hotels .slider');
    var slideCount = null;
    
    $gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    })
    
    function setSlideCount() {
        var $el = $('.slide-count-wrap').find('.total');
        $el.text(slideCount)
        
    }
    
    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.slide-count-wrap').find('.current');
        $el.text(currentSlide + 1);
    }
    
    /**** people slider */
    $('.people .slider').slick({
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:3,
        variableWidth: false,
        autoplay: true,
        responsive: [{
            breakpoint:768,
            settings:{
                slidesToShow: 2
            }
          },
            {
            breakpoint:576,
            settings:{
                slidesToShow: 1
            }
        }]
      });
    
});
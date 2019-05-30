window.addEventListener('load', function (e) {

$('.nice-select').niceSelect();

$('.brands-slider').owlCarousel({
    items:2,
    margin: 30,
    loop:true,
    dots:false,
    autoplay:true

});

$('.discussed-slider').owlCarousel({
    loop:true,
    dots:false,
    
   // autoplay:true
   responsive : {
    // breakpoint from 0 up
    0 : {
      
        items: 1,    
    },
    // breakpoint from 480 up
    480 : {
        
        items: 1,   
    },
    // breakpoint from 768 up
    768 : {
        margin:30,
        items: 2, 
    },

    992 : {
        margin:30,
        items: 3, 
    },
}
});

// if (screen.width < 992) {
     	

// $( ".discussed .row" ).addClass( ".discussed-slider" );
// }




});

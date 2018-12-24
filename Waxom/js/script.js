$(document).ready(function () {
    
 //navbar
 

 
 //
 var tab = $('a[data-toggle="tab"]');
 $(tab).on('click', function (e) {
     e.preventDefault();
     $('.projects .nav li').removeClass('active');
     $(this).parent().toggleClass('active');
     var target = $(this).attr('href');
 });
    
 
 // video start 
 
 var video = document.querySelector('.video video');

 $('.video .item img').on('click', function () {
     video.play();
    
   
     if (video.play()) {
         $('.video .item').fadeOut();
     }
     
 });
 
 //video end
 //** */
 //slider start
 
 $('.slider').slick({
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
       
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
          }  
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }  
        },
       
    ]
});
 
 
 //slider end
    
 //clients start
 
 var show = true;
 var countbox = ".info";
 $(window).on("scroll load resize", function(){

     if(!show) return false;

     var w_top = $(window).scrollTop();
     var e_top = $(countbox).offset().top;

     var w_height = $(window).height();
     var d_height = $(document).height();

     var e_height = $(countbox).outerHeight();

     if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
         $(".clients").spincrement({
             thousandSeparator: "",
             duration: 4200
         });
         $(".like").spincrement({
             thousandSeparator: "",
             duration: 4200
         });

         show = false;
     }
 });
 
//end

$(".my-flipster").flipster({
    style: 'flat',
    spacing: -0.25,
});

//
$('.gallery').mauGallery({
    columns: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 6
    },
    lightBox: true,
    lightboxId: 'myAwesomeLightbox',
    showTags: true,
    tagsPosition: 'top'
});




});
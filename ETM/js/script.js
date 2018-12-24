$(document).ready(function () {
 
 //Header menu start
  var btn = $('header .navbar-brand');
  var navbar = $('header .navbar-nav');
  var input = $('header .navbar .collapse .form-inline .form-control');
  var collapse = $('header .navbar .collapse');
  var searchBtn = $('header .navbar .collapse .form-inline button.search');
  var commentBtn = $('header .navbar .collapse .form-inline button.comment');
  
  $(btn).on('click', function () {
    
    if (screen.width >= 768) {
   $(input).toggle(1000);
   } 
  else  if (screen.width < 767) {
      navbar.slideToggle();
      commentBtn.slideToggle();

   } 

  });
 
  
  
  
     //Header menu end
    
   //*** 
   
  //Elite start
  var eliteBtn = $('.elite .elite-magic-tour a')
  var eliteText = $('.elite .elite-magic-tour .text')
  
  $(eliteText).slideUp();
  $(eliteBtn).on('click', function () {
  $(eliteText).slideToggle();
  });
 
  //Elite start
  
     //*** 
     
  //four strat
   /*   var first = $('.four .box span');
     var last = $('.four .box .last');
     $(last).hide();
     $(first).on('mouseover', function () {
       $(this).fadeOut();
       $(last).show();
     }); */
    /*  $(first).on('mouseout', function () {
       $(first).fadeIn();
       $(last).fadeOut();
     }); */
     
     //four end
     
     // start
     var last = $('.sidebar  .last')
     var open = $('.sidebar .widget_text .open');
     var close = $('.sidebar .widget_text .close');
     var carousel = $('.sidebar .carousel')
     $(open).on('click', function () {
       $(last).slideDown();
       $(carousel).slideUp();
       $(open).hide();
     });
     
     $(close).on('click', function () {
      $(carousel).slideDown();
      $(last).slideUp();
      $(open).show();
     });
     //end
     
     //start
     if (screen.width < 470){
       $('.curorts .row .col-6').removeClass('col-6');
       $('.curorts .row .col-md-4').addClass('col-9');
     }
 
     
     
     //end
     /** */
//start
$('#datefrom').dcalendarpicker({format: 'dd-mm-yyyy'});
$('#dateto').dcalendarpicker({format: 'dd-mm-yyyy'});
//end
//** */
     //start
     $('.slider').slick({
      slidesToShow: 2,
      infinite: true,
      dots: false,
      arrows: true,
      slidesToScroll: 1,
      responsive: [
         
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }  
          },
         
      ]
  });
     
     
     
     
     //end
     
     
     
     
     
     
});
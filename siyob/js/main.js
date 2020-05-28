'use strict';
// script for ie and edge to read nodelist 
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

jQuery(document).ready(function($) {
    // form styler
    $('#select-Vacansy').styler();

    // lang fom animation in width > 767px
    var mixl767 = window.matchMedia('all and (min-width: 767px)');
      if(mixl767.matches){
        const btn = document.querySelector("#langBtn");
        const item = document.querySelectorAll(".lang__item");

        // function for lang items 
        var showCard = function showCard(event) {
          btn.classList.toggle("is-rotate");

          for (var i = 0; i < item.length; i++) {
            item[i].classList.toggle("lang-item-".concat(i));
          }
        }; // // click lang btn 


        btn.addEventListener("click", showCard);


        // click for document 
       $(document).mouseup(function (e) {
        var container = $(".lang");

        if (container.has(e.target).length === 0) {
          btn.classList.remove("is-rotate");

          for (var i = 0; i < item.length; i++) {
            item[i].classList.remove("lang-item-".concat(i));
          }
        }
      });
    } // operator end max width > 767px
    
    // variable and function for width < 770x
    var mql770 = window.matchMedia('all and (max-width: 770px)');
      if(mql770.matches){
       $('.lang, .append-buttons, .social').detach().appendTo('.modal-wrap');
       $('.left-logo').detach().appendTo('#nav-test');
    }// variable and function for width < 770x

    // scroll function for background menu navbar
    $('.slider-item').scroll(function() { 
      if($(this).scrollTop() !== 0) {
        $('nav#nav-test').css('background', 'rgba(0, 0, 0, 0.8)');
      }else {
        $('nav#nav-test').css('background', 'transparent');
      }
    });
    // scroll function for background menu navbar

    //=== works block carousel =================
    $('.works-block').addClass('owl-carousel').owlCarousel({
      items : 1,
      dots : false,
      mouseDrag: false,
      touchDrag: false,
      loop: false,
      smartSpeed: 100,
      speed: 100,
      margin:0,
      mergeFit: false,
      nav : false,
      autoplay: false,
      dotsContainer: '#carousel-custom-dots',
    });
    // works block carousel end

    // carousel for dots this block animation
    $('#carousel-custom-dots').addClass('owl-carousel').owlCarousel({
      items : 6,
      dots : false,
      mouseDrag: false,
      touchDrag: false,
      loop: false,
      smartSpeed: 500,
      speed: 500,
      margin:0,
      mergeFit: false,
      nav : false,
      autoplay: false,
      responsive:{
        0: {
          items: 1,
        },
        561: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1600: {
          items: 6,
        },
      }
    });

	  var currentIndex, nextIndex;

    // animate elemnts on click  name product item 
    $('#carousel-custom-dots .owl-dot').click(function (e) {
  		nextIndex = $(this).parent().index();
  		currentIndex = $(".works-block .owl-item.active").index();
  		posControl("click", $(this));
    });

    // custom navbar for owl-carousel 2 
    $('.customPreviousBtn').click(function(e) {
      posControl("next"); 
    });

    $('.customNextBtn').click(function(e) {
      posControl("prev");
    });
    // custom navbar for owl-carousel 2 


    // function for slide position works block 
    function posControl(str, nxt) {
    	var max, tiomeOut = 1300, tiomeOut2 = 1000;
    	max = $(".works-block .owl-item").length - 1;
    	currentIndex = $(".works-block .owl-item.active").index();
    	switch(str) {
    		case "next": ($("#carousel-custom-dots .owl-item:last").hasClass("active")) ? tiomeOut = 0 : tiomeOut = 1000;
    					 $('.works-block.owl-carousel').trigger('next.owl.carousel', tiomeOut2);
    					 $('#carousel-custom-dots').trigger('next.owl.carousel', tiomeOut2);
    					 nextIndex = currentIndex + 1;
    					 if(nextIndex > max) { nextIndex = max; };
    					 $('#carousel-custom-dots .owl-item').eq(nextIndex).addClass('show').siblings().removeClass('show'); break;
    		case "prev": ($("#carousel-custom-dots .owl-item:first").hasClass("active")) ? tiomeOut = 0 : tiomeOut = 1000;
    					 $('.works-block.owl-carousel').trigger('prev.owl.carousel', tiomeOut2);
    					 $('#carousel-custom-dots').trigger('prev.owl.carousel', tiomeOut2);
    					 nextIndex = currentIndex - 1;
    					 if(nextIndex < 0) { nextIndex = 0; };
    					 $('#carousel-custom-dots .owl-item').eq(nextIndex).addClass('show').siblings().removeClass('show'); break;
    		case "click": $(nxt).parent().addClass('show').siblings().removeClass('show');
    					  tiomeOut = 0; break;
    	}
    	setTimeout(function(){
    		slidePosition($('#carousel-custom-dots .owl-item.show'));
    	}, tiomeOut);
    }
    // function for slide position works block end

    function slidePosition(el) {
	    var posX, curX, carousel, time;
	    time = 700 / Math.abs(currentIndex - nextIndex);
	    // posX = el.position().left-40;
	    posX = $(el)[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
	    curX = $("#slider").parent()[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
	    // posY = el.position().top;
	    $("#slider").css('left', Math.abs(posX - curX));
	    // $("#slider").css('top', posY);
	    carousel = $('.works-block').data('owl.carousel');
	      carousel.to(carousel.relative(nextIndex), time);
	  }
     
    $('#carousel-custom-dots .owl-dot').eq(0).click();
    $('#carousel-custom-dots .owl-dot').eq(0).addClass('show').siblings().removeClass('show');
	
  	var goScroll = false;
  	//if (mixl767.matches) {
  		/* $(window).bind('scroll', function (e) {
			console.log($(".swiper-slide-active > .slider-item")[0].scrollHeight);
  			var direction = (function () {
  				var delta = (e.type === 'DOMMouseScroll' ?
    				 e.originalEvent.detail * -40 :
    				 e.originalEvent.wheelDelta);

  				return delta > 0 ? 0 : 1;
  			}());

  			var activeIndex = $(".swiper-slide.swiper-slide-active").index();
  			
  			wScroll( direction, activeIndex );
  			goScroll = true;
  		}); */
  	//}
	var previousScroll = 0;
	
	function windowScroll(ev) {
		var activeIndex = $(".swiper-slide.swiper-slide-active").index();

		var activeEl = $(".swiper-slide-active > .slider-item")[0];
		if(activeEl.scrollHeight > activeEl.clientHeight) {
			var a = activeEl.scrollTop;
			if(ev == 0) {   //up
				if(a > 0) return;
			} else {        //down
				if(a == 0) return;
			}
		}
		wScroll( ev, activeIndex );
		goScroll = true;
	}
	
	

	if (mixl767.matches) {
		// Detect IE version
		var iev=0;
		var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
		var trident = !!navigator.userAgent.match(/Trident\/7.0/);
		var rv=navigator.userAgent.indexOf("rv:11.0");

		if (ieold) iev=new Number(RegExp.$1);
		if (navigator.appVersion.indexOf("MSIE 10") != -1) iev=10;
		if (trident&&rv!=-1) iev=11;

		// Firefox or IE 11
		if(typeof InstallTrigger !== 'undefined' || iev == 11) {
			var lastScrollTop = 0;
			$(window).on('scroll', function() {
				st = $(this).scrollTop();
				if(st < lastScrollTop) {
					windowScroll(0);
				}
				else if(st > lastScrollTop) {
					windowScroll(1);
				}
				lastScrollTop = st;
			});
		}
		// Other browsers
		else {
		}
			$('body').on('mousewheel', function(e){
				if(e.originalEvent.wheelDelta > 0) {
					windowScroll(0);
				}
				else if(e.originalEvent.wheelDelta < 0) {
					windowScroll(1);
				}
			});
	} else {
		var lastY;
		$(document).bind("touchstart", function(e) {
			lastY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
		});
		$(document).bind("touchmove mousemove", function(e) {
		var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
		if (Math.abs(currentY-lastY) < 15) { return; }
		if (currentY > lastY) {
			windowScroll(0);
			console.log("down");
		} else {
			windowScroll(1);
			console.log("up");
		}
		});
	}	
	
  	
  	function wScroll(d, index) {
  		if( goScroll ) return;
  		var curIndex =  $(".swiper-slide.swiper-slide-active").index();
  		
  		if(d === 1) {
  		   if($(".left-bar .scroll-nav .swiper-button-next").length > 0)
  				$(".left-bar .scroll-nav .swiper-button-next").click();
  		}
  		if(d === 0) {
  			if($(".left-bar .scroll-nav .swiper-button-prev").length > 0)
  				$(".left-bar .scroll-nav .swiper-button-prev").click();
  		}
  		
  		setTimeout(function(){ goScroll = false; }, 1000);
  	}



// swipper slider

      // // menu append text
      var menu122 = [];
      
      //  ============ for ie browser ====================
      // var menuItem = document.querySelectorAll('append-buttons2 li a');
      // for (var i = 0; i <= menuItem.length; i++) {
      //   menu122.push(menuItem[i].text);
      // }
      //  ============ for ie browser ====================

      document.querySelectorAll(".append-buttons2 li a").forEach(function (el) {
        menu122.push(el.text);
      });




      //
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // effect: 'coverflow',
        effect: 'slide',
        speed: 1500,
        
        // mousewheel: true,     
        paralax: true,
        roundLengths: true,
        simulateTouch: false,
        nested: true,
        grabCursor: false,
        watchSlidesProgress: false,
        updateOnImagesReady: false,
        followFinger: false,
        touchEventsTarget: ".swiper-container",
        // loopAdditionalSlides: 10,
        // initialSlide: activeSlide,
        shortSwipes: false,
        slideToClickedSlide: false,
        
        // preventClicksPropagation: true,
        // preventClicks: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        hashNavigation: {
          replaceState: true,
        },
        pagination: {
          // el: '.swiper-pagination',
          el: '.append-buttons',
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="nav-li ' + className + '"><a href="#' + (menu122[index]).split(' ').join('') + '" data-text-stroke="' + (menu122[index]) +'">' + (menu122[index]) + '</a></li>';
          }
        },


        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //       slidesPerView: 1,
        //       mousewheelControl: false,
        //     },
        //     // when window width is >= 480px
        //     480: {
        //       slidesPerView: 1,
        //       mousewheelControl: false,
        //     },
        //     // when window width is >= 640px
        //     640: {
        //       mousewheelControl: true,
        //     }
        // } 
    }); 

function changeActive() {
  var $navListItem = $('.nav-li');
  var $firstChild = $('.nav-li:first-child');
  $navListItem.click(function () {
    var $activeNav, $currentIndex, $this;

    $this = $(this);
    $activeNav = $('.swiper-pagination-bullet-active');
    $currentIndex = $activeNav.index();
    $activeNav.removeClass('swiper-pagination-bullet-active');
    $this.addClass('swiper-pagination-bullet-active');
    if ($this.is($activeNav)) {
      return 0;
    } else {
      if ($this.index() > $currentIndex) {
        $this.siblings().removeAttr('data-animation');
        // $this.siblings().removeAttr('data-animation1');
        $this.prev().attr('data-animation1', 'stroke-2'); 
        $this.next().attr('data-animation1', 'stroke-1'); 
        $this.attr('data-animation', 'stroke-left');
      } 
      else {
        $this.siblings().removeAttr('data-animation');
        // $this.siblings().removeAttr('data-animation1');
        $this.prev().attr('data-animation1', 'stroke-2'); 
        $this.next().attr('data-animation1', 'stroke-1'); 
        $this.attr('data-animation', 'stroke-right');
      }
    }
  });

}
changeActive();

    swiper.on('slideChange', function (p) {
      var indexsw = swiper.activeIndex;
      var current1 = indexsw;
      var src1 = $(".swiper-slide").eq(current1).find('.imggg img').attr('src2');
      var imgurl = "url('" + src1 + "')";

      $("#mainbg img").removeClass("active");
      $("#mainbg img").eq(indexsw).addClass("active");
      $('.swiper-container .paralax-bg').toggleClass('active');

      var $activeNav2, $currentIndex2, $this2;

      $this2 = $('.swiper-pagination-bullet').eq(indexsw);
      $activeNav2 = $('.swiper-pagination-bullet-active');
      $currentIndex2 = $activeNav2.index();
      $activeNav2.removeClass('swiper-pagination-bullet-active');
      $this2.addClass('swiper-pagination-bullet-active');
        if ($this2.index() > $currentIndex2) {
          $this2.siblings().removeAttr('data-animation');
          // $this.siblings().removeAttr('data-animation1');
          $this2.prev().attr('data-animation1', 'stroke-2'); 
          $this2.next().attr('data-animation1', 'stroke-1'); 
          $this2.attr('data-animation', 'stroke-left');
        } 
        else {
          $this2.siblings().removeAttr('data-animation');
          // $this.siblings().removeAttr('data-animation1');
          $this2.prev().attr('data-animation1', 'stroke-2'); 
          $this2.next().attr('data-animation1', 'stroke-1'); 
          $this2.attr('data-animation', 'stroke-right');
        }

    });

  var overlay = document.getElementById('overlarW');
  var vid = document.getElementById('aboutVideo');

    overlay.addEventListener('click', function() {
      vid.play();
      overlarW.className="o"; 
    });

  $(document).mouseup(function (e) {
    var container11 = $(".video-player");
		if (container11.has(e.target).length === 0){
			overlay.classList.remove("o");
			vid.pause();
			}
	});

});

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes-css_filters-svg_filters
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("svgfilters",function(){var a=!1;try{a=typeof SVGFEColorMatrixElement!==undefined&&SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2}catch(b){}return a});

// IE 10 only CSS properties
var ie10Styles = [
'msTouchAction',
'msWrapFlow'];
 
var ie11Styles = [
'msTextCombineHorizontal'];
 
/*
* Test all IE only CSS properties
*/
 
var d = document;
var b = d.body;
var s = b.style;
var brwoser = null;
var property;
 
// Tests IE10 properties
for (var i = 0; i < ie10Styles.length; i++) {
  property = ie10Styles[i];
  if (s[property] != undefined) {
    brwoser = "ie10";
  }
}
 
// Tests IE11 properties
for (var i = 0; i < ie11Styles.length; i++) {
  property = ie11Styles[i];
  if (s[property] != undefined) {
    brwoser = "ie11";
  }
}


// sdsdsd
//Grayscale images only on browsers IE10+ since they removed support for CSS grayscale filter
   if(brwoser == "ie10" || brwoser == "ie11" ){

    //If the browser supports Filters, then we assume that it is Microsoft Edge
    if (Modernizr.cssfilters){
      $('body').addClass('edge'); // Adds Microsoft Edge class to the body
    } else {
      $('body').addClass('ie11'); // Fixes marbin issue on IE10 and IE11 after canvas function on images
      $('.part-item img').each(function(){
        var el = $(this);
        el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale ieImage').css({"position":"absolute","z-index":"5","opacity":"0"}).insertBefore(el).queue(function(){
          var el = $(this);
          el.parent().css({"width":this.width,"height":this.height});
          el.dequeue();
        });
        this.src = grayscaleIe(this.src);
      });

      // Quick animation on IE10+ 
      $('.part-item').hover(
        function () {
          $(this).parent().find('img:first').stop().animate({opacity:1}, 200);
        }, 
        function () {
          $('.img_grayscale').stop().animate({opacity:0}, 200);
        }
      );

      // Custom grayscale function for IE10 and IE11
      function grayscaleIe(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height; 
        ctx.drawImage(imgObj, 0, 0); 
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
          for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
          }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
      };
    };
   };

   // sdsfsf
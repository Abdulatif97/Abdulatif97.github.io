window.addEventListener('load',  function (e) {
 
        $("#preloader").delay(700).fadeOut("slow");
   
 var elem = document.querySelector('.text');
 var str = elem.innerHTML;
 elem.innerHTML = '';
 var i = 0;

 function write() {
    elem.innerHTML += str.charAt(i);
    i++;
    setTimeout(write, 200)
   
 }
 
 write()
;

});

window.addEventListener('load', function (e) {
    var bar = document.querySelector('.progress-bar');
    var barHtml = document.querySelector('.design .designer .info .bar p');
    var width = 0;
  
$('.design .designer').on('mouseover', function () {
    setInterval(go, 90);
});

    function go() {
        if (width < 85) {
            width++;
            bar.style.width = width + '%';
            barHtml.innerHTML = width + '%';
        }
    }
    
    
    
    var tab = $('.portfolio .nav li a[data-toggle="tab"]');
    $(tab).on('click', function (e) {
        e.preventDefault();
        $('.active').removeClass('active');
        $(this).parent().toggleClass('active');
        var target = $(this).attr('href');
        $(target).toggleClass('active');
    });
    
});
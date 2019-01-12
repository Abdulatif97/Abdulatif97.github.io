$(document).ready(function () {
    
    
    var tab = $('.card-info .nav li  a[data-toggle="tab"]');
    $(tab).on('click', function (e) {
        e.preventDefault();
        $('.active2').removeClass('active2');
        $(this).parent().toggleClass('active2');
        var target = $(this).attr('href');
        $(target).toggleClass('active2');
    });
    
    
    
  
});
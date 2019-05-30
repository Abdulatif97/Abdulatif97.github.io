/**
 * Created by zuxriddin on 27.12.16.
 */


/**
 * Created by Azamat Mirvosiqov on 29.01.2015.
 */

var curUrl = window.location.href;
var arCurUrl = curUrl.split('/');
var noImageTitle = 'Без картинки';
var setImageTitle = 'С картинкой';
switch (arCurUrl[3]){
    case 'uz':
        noImageTitle = 'Расмсиз';
        setImageTitle = 'Расмли';
        break;
    case 'oz':
        noImageTitle = 'Rasmsiz';
        setImageTitle = 'Rasmli';
        break;
    case 'en':
        noImageTitle = 'Without a picture';
        setImageTitle = 'With a picture';
        break;
}

var min = 16,
    max = 30;

function makeNormal() {
    $('html').removeClass('blackAndWhite blackAndWhiteInvert');
    $.removeCookie('specialView', {path: '/'});
}

function makeBlackAndWhite() {
    makeNormal();
    $('html').addClass('blackAndWhite');
    $.cookie("specialView", 'blackAndWhite', {path: '/'});
}

function makeBlackAndWhiteDark() {
    makeNormal();
    $('html').addClass('blackAndWhiteInvert');
    $.cookie("specialView", 'blackAndWhiteInvert', {path: '/'});
}

function makeSetImage() {
    $('html').removeClass( "noImage" );
    //$('.spcImage').removeClass( "spcSetImage" );
    $('.spcNoImage').removeClass( "spcSetImage" );
    $('.spcNoImage').attr('data-original-title', setImageTitle);
    $.removeCookie('specialViewImage', {path: '/'});
}

function makeNoImage() {
    $('html').stop().addClass( "noImage" );
    $('.spcNoImage').addClass( "spcSetImage" );
    $('.spcNoImage').attr('data-original-title', noImageTitle);
    $.cookie("specialViewImage", 'noImage', {path: '/'});
}

function offImages(){
    if ($.cookie("specialViewImage") == 'noImage'){
        makeSetImage();
    } else {
        makeNoImage();
    }
}

function setFontSize(size) {
    if (size < min) {
        size = min;
    }
    if (size > max) {
        size = max;
    }
    $('nav.noo-main-menu *').css({fontSize: parseInt(size)-3+'px'});
    $('.onewpost.hellotrans h4').css({fontSize: parseInt(size)+6+'px'});
    $('.onewpost.hellotrans p').css({fontSize: parseInt(size)-2+'px'});
    $('h1,h2,h3,h4,h5,a').css({fontSize: parseInt(size)-2+'px'});
    if (size > max - 7) {
        $('.news-container .main-news').hide();
        $('.news-container .listData').removeClass('col-md-6').addClass('col-md-12');
    } else {
        $('.news-container .main-news').show();
        $('.news-container .listData').removeClass('col-md-12').addClass('col-md-6');
    }
}

function saveFontSize(size) {
    $.cookie("fontSize", size, {path: '/'});
}
function changeSliderText(sliderId, value) {
    var position = Math.round(Math.abs((value - min) * (100 / (max - min))));
    $('#' + sliderId).prev('.sliderText').children('.range').text(position);
}



$(document).ready(function () {
    var appearance = $.cookie("specialView");
    switch (appearance) {
        case 'blackAndWhite':
            makeBlackAndWhite();
            break;
        case 'blackAndWhiteInvert':
            makeBlackAndWhiteDark();
            break;
    }
    var noimage = $.cookie("specialViewImage");
    switch (noimage) {
        case 'noImage':
            makeNoImage();
            break;
        case 'setImage':
            makeSetImage();
            break;
    }

    $('.no-propagation').click(function (e) {
        e.stopPropagation();
    });

    $('.appearance .spcNormal').click(function () {
        makeNormal();
    });
    $('.appearance .spcWhiteAndBlack').click(function () {
        makeBlackAndWhite();

    });
    $('.appearance .spcDark').click(function () {
        makeBlackAndWhiteDark();
    });

    $('.appearance .spcNoImage').click(function () {
        offImages();
    });



    $('#fontSizer').slider({
        min: min,
        max: max,
        range: "min",
        slide: function (event, ui) {
            setFontSize(ui.value);
            changeSliderText('fontSizer', ui.value);
        },
        change: function (event, ui) {
            saveFontSize(ui.value);
        }
    });



    var fontSize = $.cookie("fontSize");
    if (typeof(fontSize) != 'undefined') {
        $("#fontSizer").slider('value', fontSize);
        setFontSize(fontSize);
        changeSliderText('fontSizer', fontSize);
    }




});



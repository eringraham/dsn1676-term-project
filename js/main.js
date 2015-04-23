var $menuBtn = $('.menu-btn');
var $fullList = $('.full-list');

$menuBtn.on('click', function () {
    $fullList.toggleClass('js-menu-open');
});
     
var $tabs = $('.tabs');
var $panel = $('.panel');
    
$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panel.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabs.find('.js-current').removeClass('js-current');
    $(this).addClass('js-current');
    
});

var $tabstwo = $('.tabstwo');
var $paneltwo = $('.paneltwo');
    
$tabstwo.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $paneltwo.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabstwo.find('.js-currenttwo').removeClass('js-currenttwo');
    $(this).addClass('js-currenttwo');
    
});

var $tabsthree = $('.tabsthree');
var $panelthree = $('.panelthree');
    
$tabsthree.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panelthree.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabsthree.find('.js-currentthree').removeClass('js-currentthree');
    $(this).addClass('js-currentthree');
    
});

var $navList = $('.nav-list');
var $banner = $('.banner');
var $footer = $('.footer');

$navList.localScroll();
$banner.localScroll();
$footer.localScroll();


var $flowerSection = $('.flower');

$flowerSection.waypoint(function () {
    $flowerSection.toggleClass('js-active');
    
}, {offset: '80%' });
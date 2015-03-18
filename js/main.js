var $menuBtn = $('.menu-btn')
var $fullList = $('.full-list')


$menuBtn.on('click', function (e) {
    console.log('clicked menu-btn')
    $fullList.toggleClass('js-menu-open');

        
});


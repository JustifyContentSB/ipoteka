$('.popup-btn').on('click', function(e) {
    e.preventDefault();
    $('.popup').addClass('active');
    $('.overlay').addClass('active');
    $('body').addClass('no-scroll');
});

$('.popup__close').on('click', function(e) {
    e.preventDefault();
    $('.popup').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('no-scroll');
});

$('.overlay').on('click', function(e) {
    $('.popup').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('no-scroll');
});
let navBurger = $('.header__top-burger');
let headerNav = $('.header__nav');

if (navBurger !== 'undefined') {
    $(navBurger).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(headerNav).toggleClass('active');
    })
}
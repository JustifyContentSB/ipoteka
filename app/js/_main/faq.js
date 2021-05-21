let faqItem = $('.faq__item');

if (faqItem !== 'undefined') {
    $(faqItem).on('click', function(e) {
        e.preventDefault();
        $(this).children('.faq__question').toggleClass('active');
        $(this).children('.faq__answer').toggleClass('active');
    })
}
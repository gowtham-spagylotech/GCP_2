$(document).ready(function() {
    $('.footerNav .footerAccordionTitle').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $('.footerNav .footerAccordionTitle').removeClass("active");
            $(this).addClass("active");
        }
        $(this).next('.footerAccordionContent').slideToggle();
        $('.footerAccordionContent').not($(this).next('.footerAccordionContent')).slideUp();
    });
});
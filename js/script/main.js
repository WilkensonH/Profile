// smooth scroll 
$('.navbar a').on('click', function (e) {

    if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
})

// add header nav background on scroll
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("header-styles");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("header-styles");
        }
    });
});
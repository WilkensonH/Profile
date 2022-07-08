// smooth scroll  
$('.navbar a , .link a').on('click', function (e) {
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
        if ($(window).scrollTop() > 60) {
            $(".header").addClass("header-styles");
        } else {
            $(".header").removeClass("header-styles");
        }
    });
})

// about sec/title slide right
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            $(".about-slide-rt").addClass("slide-right");
        } else {
            $(".about-slide-rt").removeClass("slide-right");
        }
    });
})
//slide about description left
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
            $(".about-slide-lf").addClass("slide-left");
        } else {
            $(".about-slide-lf").removeClass("slide-left");
        }
    });
})
//rotating code snippet
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            $(".about-code-snip").addClass("rotate");
        } else {
            $(".about-code-snip").removeClass("rotate");
        }
    });
})
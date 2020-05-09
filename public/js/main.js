$(document).ready(() => {
    new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 80,
        backSpeed: 90,
        smartBackspace: true
    });

    $('body').scrollspy({ target: ".navbar", offset: 50 });
    $('.nav-item a').click(function () {
        if (this.hash !== "") {
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#menu-mobile span').click(function () {
        var display = $('#menu-mobile ul').css("opacity");
        if (display === '0') {
            $('#menu-mobile ul').css('opacity', '1');
        } else {
            $('#menu-mobile ul').css('opacity', '0');
        }
    })
})
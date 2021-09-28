document.addEventListener("DOMContentLoaded", function() {
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= 150) {
            $('body').addClass('onScroll');
        } else {
            $('body').removeClass('onScroll');
        }
    });
    $('.jsMenu').on('click', function() {
        $('body').toggleClass('menuOpen');
    });
    $('.core-item').on('click', function() {
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active');
    });
    $(".home-arrow").click(function() {
        $('html,body').animate({ scrollTop:$(this).parent().next().offset().top - 80}, 'slow');});
    if (window.outerWidth < 1024) {
    $('.has-submenu').on('click', function() {
        $(this).parent().toggleClass('active')
    });
    }
});

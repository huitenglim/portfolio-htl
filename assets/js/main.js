(function($) {
    // Init scrollIt if body contains app class
    if($('body').is('.app')) {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            scrollTime: 1200,
            topOffset: -150
        });
    }

    // Hides mobile nav dropdown on breakpoint 375px or less
    if($(window).width() <= 375) {
        $("#mobile-nav").removeClass('show');
    }

    // Execute only when window resize
    $(window).resize(function (){
        // Hides mobile nav dropdown on breakpoint 375px or less
        if($(window).width() <= 375) {
            $("#mobile-nav").removeClass('show');
        }
        else {
            $("#mobile-nav").addClass('show');
        }
    });
})(jQuery);

// Initialise typed js
let typed = new Typed('#typed', {
    strings: [
        "code.",
        "design.",
    ],
    typeSpeed: 120,
    loop: true
});
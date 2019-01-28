(function($) {
    // Init scrollIt if body contains app class
    if($('body').is('.app')) {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            scrollTime: 1200,
            topOffset: -150
        });

        // Initialise typed js
        let typed = new Typed('#typed', {
            strings: [
                "code.",
                "design.",
            ],
            typeSpeed: 120,
            loop: true
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

    // Custom Modal
    $('.btn-modal').click(function(){
        let buttonId = $(this).attr('id');

        if($('#melontoon-modal-container')) {
            $('#melontoon-modal-container').removeAttr('class').addClass(buttonId);
        }

        if($('#webnic-modal-container')) {
            $('#webnic-modal-container').removeAttr('class').addClass(buttonId);
        }

        if($('#etisalat-modal-container')) {
            $('#etisalat-modal-container').removeAttr('class').addClass(buttonId);
        }

        if($('#startup-modal-container')) {
            $('#startup-modal-container').removeAttr('class').addClass(buttonId);
        }

        $('body').addClass('modal-active');
    });

    $('#melontoon-close-modal').click(function(){
        $('#melontoon-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });

    $('#webnic-close-modal').click(function(){
        $('#webnic-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });

    $('#etisalat-close-modal').click(function(){
        $('#etisalat-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });

    $('#startup-close-modal').click(function(){
        $('#startup-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });
})(jQuery);
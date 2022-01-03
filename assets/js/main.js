(function($) {
    var projectCloseIcon = $('.project-modal-container .nav-img-link');

    // Init scrollIt if body contains app class
    if($('body').is('.app')) {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            scrollTime: 1200,
            topOffset: -150
        });

        // Initialise typed js
        var typed = new Typed('#typed', {
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
        var buttonId = $(this).attr('id'),
            allProjectModal = $('.project-modal-container'),
            projectModal = $('.project-modal-container' + '[aria-labelledby="' + buttonId + '"]');

        if (allProjectModal.hasClass('out')) {
           allProjectModal.removeClass('out fold-up-modal');
        }

        projectModal.addClass('fold-up-modal');
        
        $('body').addClass('modal-active');
    });

    $(projectCloseIcon).click(function(){
        $(this).parents('.project-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });

    $('#past-project-close-modal').click(function(){
        $('#past-project-modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });

    // Init ScrollMagic
    $('[data-scrollmagic]').each(function (index, elem) {
        // Init ScrollMagic Controller
        var controller = new ScrollMagic.Controller();

        // Create Animations
        var upTitle = $(elem).find('h1.scrollmagic-upTitle'),
            leftSub = $(elem).find('h3.scrollmagic-leftSub'),
            rightSub = $(elem).find('h3.scrollmagic-rightSub'),
            upPara = $(elem).find('p.scrollmagic-upPara'),
            leftPara = $(elem).find('p.scrollmagic-leftPara'),
            rightPara = $(elem).find('p.scrollmagic-rightPara'),
            upImg = $(elem).find('img.scrollmagic-upImg'),
            leftImg = $(elem).find('img.scrollmagic-leftImg'),
            rightImg = $(elem).find('img.scrollmagic-rightImg'),
            upDiv = $(elem).find('div.scrollmagic-upDiv'),
            downDiv = $(elem).find('div.scrollmagic-downDiv'),
            upCap = $(elem).find('p.scrollmagic-upCap'),
            leftList = $(elem).find('ul.scrollmagic-leftList'),
            upBtn = $(elem).find('a.scrollmagic-upBtn');

        var tl = new TimelineMax({pause: true});
        tl.add("start") // add timeline label
            .fromTo(upTitle, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(leftSub, 0.5, { x: '-60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(rightSub, 0.5, { x: '60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(upPara, 0.5, { y: '120px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(leftPara, 0.5, { x: '-60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(rightPara, 0.5, { x: '60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(upImg, 0.5, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(leftImg, 0.5, { x: '-60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(rightImg, 0.5, { x: '60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(upDiv, 0.5, { y: '-40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(downDiv, 0.5, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(upCap, 0.4, { y: '-20px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(leftList, 0.5, { x: '-60px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
            .fromTo(upBtn, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start");

        // Create the Scene and trigger when visible
        var scene = new ScrollMagic.Scene({
            triggerElement: elem,
            offset: -100 // offset the trigger number of px below scene's top
        })
            .setTween(tl)
            .addTo(controller);

        // Add debug indicators fixed on right side
        // scene.addIndicators();
    });
})(jQuery);

var height = {
    adjust: function(element, parent) {
        var height = $(element).parents(parent).height();

        return $(element).css('height', height);
    }
};

var tab = {
    toggle: function(where) {
        $(where).find('.active').children('.content').css('display','block');

        $(where + ' .btn-toggle').click( function() {
            if ( $(this).parent().hasClass('active') ) {
                $(this).siblings('.content').slideDown();
            } else {
                $(this).parent().parent().find('.active').children('.content').slideUp();
                $(this).parent().parent().find('.active').removeClass('active');
                $(this).parent().addClass('active');
                $(this).parent().parent().find('.icon').removeClass('icon-minus').addClass('icon-plus');
                $(this).find('.icon').removeClass('icon-plus').addClass('icon-minus');
                $(this).siblings('.content').slideDown();
            }
        });
    }
};

$(document).ready(function(){
    tab.toggle('#about');

    if (window.innerWidth > 950) {
        $.getScript( "assets/js/jquery.fullPage.min.js", function(){
            $(document).ready(function() {
                $('#fullpage').fullpage({
                    loopHorizontal: false,
                    controlArrows: true,
                    dragAndMove: true,
                    anchors:['home-section', 'about-section', 'disciplines-section', 'process-section', 'contact-section']
                });
            });
        });

        $('.arrowDown').click(function(){
            $.fn.fullpage.moveSectionDown();
        });
        $('.arrowUp').click(function(){
            $.fn.fullpage.moveSectionUp();
        });
    }
});

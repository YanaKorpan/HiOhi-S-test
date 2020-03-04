(function ($) {
    $(document).ready(function () {

        function toggleBg() {
            if($(window).scrollTop() > 0){
                $('.header__show-menu span').addClass('toggle-bg');
                $('#header').addClass('toggle-bg');
            } else {
                $('.header__show-menu span').removeClass('toggle-bg');
                $('#header.toggle-bg').removeClass('toggle-bg');
            }
        }
        toggleBg();
        $(window).on('scroll', toggleBg);


        $('.header__show-menu').on('click', function () {
            $(this).toggleClass('show');
            $('.menu').toggleClass('show');
        });

        $('.header__contacts').on('click', function () {
            $('.our-contact-popup').addClass('show');
        });

        $('.our-contact-popup .popup__close').on('click', function () {
            $('.our-contact-popup').removeClass('show');
        });

        $('#header ul').find('li a').on('click', function (e) {
            const linkTrgt = $($(this).attr('href'));
            if(linkTrgt.length > 0){
                e.preventDefault();
                $('body, html').animate({
                    scrollTop: linkTrgt.offset().top - 44
                }, 750);
            }
        });

        $('.program__btn-more').on('click', function () {
            ($(this).text() === 'показать меньше...') ? $(this).text('показать больше...') :  $(this).text('показать меньше...')
            $(this).parent().find('.about-author__more').toggle('display');
        });

        $('.program__btn').on('click', function () {
            let targetElm = $(this).attr('data-target');
            $(`#${targetElm}`).addClass('show');
        });

        $('.speaker-popup .popup__close').on('click', function () {
            $('.speaker-popup').removeClass('show');
        });

        $('.speaker-popup__btn').on('click', function () {
            $(this).parent().find('form').toggle('display');
        });

        $('.price__btn').on('click', function () {
            $('.participate-popup').addClass('show');
        });

        $('.participate-popup .popup__close').on('click', function () {
            $('.participate-popup').removeClass('show');
        });

        $('.fqa__title').on('click', function(){
            $(this).find('.show span:nth-child(2)').toggleClass('hide');
            $(this).parent().find('.fqa__text').toggle('display');
        });

        $(window).on('scroll', function () {
            ($(this).scrollTop() > 500) ? $('.btn-up').fadeIn() : $('.btn-up').fadeOut()
        })
        
        $('.btn-up').on('click', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 750);
        });

        $('input[type="tel"]').mask("+7 459 999 99 99");
    })
})(jQuery);
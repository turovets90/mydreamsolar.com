$(document).ready(function(){


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('main').css({'margin-top': header_height+'px'});

        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.notification').addClass('show');
            } else {
                $('.notification').removeClass('show');
            }
        });

        $('.notification .close').click(function(){
            $('.notification').remove();
        });


    });
    $(window).resize();


    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
    })

    $('.faq_list_item').each(function(){
        var faq_list_item_head=$(this).find('.faq_list_item_head');
        var faq_list_item_body=$(this).find('.faq_list_item_body');
        $(faq_list_item_head).click(function(){
            $('.faq_list_item').removeClass('act');
            $('.faq_list_item_body').slideUp();
            if($(faq_list_item_body).is(':visible')){
                $(faq_list_item_head).parent().removeClass('act');
                $(faq_list_item_body).slideUp();
            }else{
                $(faq_list_item_head).parent().toggleClass('act');
                $(faq_list_item_body).slideDown();
            }

        });
    });



    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });



});



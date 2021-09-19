$(document).ready(function(){

    /* перевод картинки svg в код */
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


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('header').next().css({'margin-top': header_height+'px'});
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

/*
    $('.btn_group .item').each(function(){
        var toggler=$(this).find('button');
        $(toggler).click(function(){
            $('.dropdown_menu').slideUp().removeClass('show');
            if($(toggler).next().is(':visible')){
                $(toggler).next().slideUp().removeClass('show');
            }else{
                $(toggler).next().slideDown().addClass('show');
            }
        })

    });




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

    $('.main_menu .arrow, .s_catalog .arrow, .filter_item_title').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
    })


    $('.s_catalog_title, .filter_title').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });



    if($('.m_products_slider .product_item').length > 4){
        $('.m_products_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.m_products_slider .product_item').length > 1){
        $('.m_products_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.m_products_slider .product_item').length > 2){
        $('.m_products_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 1200 && $('.m_products_slider .product_item').length > 3){
        $('.m_products_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    if($('.items3_slider .item').length > 3){
        $('.items3_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 767 && $('.items3_slider .item').length > 1){
        $('.items3_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 1200 && $('.items3_slider .item').length > 2){
        $('.items3_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }


    if($('.video_slider .item').length > 3){
        $('.video_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 767 && $('.video_slider .item').length > 1){
        $('.video_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 1200 && $('.video_slider .item').length > 2){
        $('.video_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }

    $('.read_more').click(function(){
        $(this).hide().prev().slideDown();
    });

    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    var productView = localStorage.getItem('productView');
    if(productView == 'list'){
        $('.views .view_grid').removeClass('active');
        $('.views .view_list').addClass('active');
        $('.pr_views').removeClass('grid').addClass('list');
    }else if(productView == 'grid'){
        $('.views .view_list').removeClass('active');
        $('.views .view_grid').addClass('active');
        $('.pr_views').removeClass('list').addClass('grid');
    }
    $('.views .view_grid').click(function(){
        localStorage.removeItem('productView');
        localStorage.setItem('productView', 'grid');
        $('.views .view_list').removeClass('active');
        $(this).addClass('active');
        $('.pr_views').removeClass('list').addClass('grid');
        return false;
    });
    $('.views .view_list').click(function(){
        localStorage.removeItem('productView');
        localStorage.setItem('productView', 'list');
        $('.views .view_grid').removeClass('active');
        $(this).addClass('active');
        $('.pr_views').removeClass('grid').addClass('list');
        return false;
    });

    console.log( "productView = " + localStorage.getItem("productView"));




    $('.range_values').each(function(){
        var range=$(this).find('.range');
        var tasks_status1=$(this).find('.tasks_status1');
        var tasks_status2=$(this).find('.tasks_status2');
        $(range).slider({
            range: true,
            min: 0,
            max: 350,
            values: [0, 150],
            step: 1,
            slide: function(event, ui) {
                $(tasks_status1).val( ui.values[0] );
                $(tasks_status2).val( ui.values[1] );
            }
        });

    });
    $(document).on("change","input[class=tasks_status1]", function() {
        $(this).closest('.range_values').find('.range').slider('values',0,$(this).val());
    });
    $(document).on("change","input[class=tasks_status2]", function() {
        $(this).closest('.range_values').find('.range').slider('values',1,$(this).val());
    });


    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product_slider_nav'
    });
    $('.product_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        focusOnSelect: true,
        arrows: true
    });

    $('.file').filestyle({
        text : 'Добавить файлы',
        buttonBefore : true
    });



    $( ".c_menu" ).hover(
        function() {
            $( "html" ).addClass( 'page_noscroll' );
        }, function() {
            $( "html" ).removeClass( 'page_noscroll' );
        }
    );




 */


});



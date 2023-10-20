$(function () {
    //pc 2차 메뉴
    let pcDepth01 = $('.pc .depth01');
    let pcDepth02 = $('.pc .depth02');

    pcDepth01.mouseenter(function(){
        $(this).children().stop().slideDown();
    });
    pcDepth01.mouseleave(function(){
        pcDepth02.stop().slideUp();
    });


    //mobileNav의 left값 확인
    //console.log(mobileNav.offset().left)

    //모바일메뉴
    let mobileBtn = $('.mobile_menu');
    let mobileNav = $('.mobile_gnb');

    mobileBtn.click(function(){
        if(mobileNav.offset().left == -$(window).width()) {
            $(this).addClass('on');
            mobileNav.animate({
                'left':'0',
            })
        } else {
            $(this).removeClass('on');
            mobileNav.animate({
                'left':-$(window).width(),
            })
        }
    });/* mobileBtn.click() end */

    let depth01 = $('.depth01 > a');
    let depth02 = $('.depth02');
    depth01.click(function(){
        if($(this).siblings().css('display') == 'none') {
            depth02.slideUp();
            $(this).siblings().slideDown();
            $(this).css({
                'color' : '#E86747',
            });
        
        } else {
            $(this).siblings().slideUp();
            $(this).css({
                'color' : '#333',
            });
        }
    });//.depth01 click


    //recipe
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    

});//jquery end
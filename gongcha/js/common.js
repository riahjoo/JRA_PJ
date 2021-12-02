// 상단메뉴 

/// 모바일 여부 구분 상태변수
let mob = 0; //////// 1-모바일,0-모바일 아님

let reFn = () => {

    if ($(window).width() <= 1200) {
        mob = 1;
        $("#top").removeClass("on");

    } else {
        mob = 0;
    }

};

reFn();
$(window).resize(reFn);


$(function () {

    $("html,body").animate({

        scrollTop: "0px"

    }, 100)

    // 스크롤 위치변수
    let scTop;

    let scSts = 1; // 실행 전 1, 실행 후 0

    // 상단영역 요소
    let tm = $("#top");


    $(window).scroll(function () {


        scTop = $(this).scrollTop();


        if (mob) return;

        if (scTop >= 100 && scSts === 1) {

            scSts = 0;

            tm.addClass("on");

        } else if (scTop < 100 && scSts === 0) {
            scSts = 1;

            tm.removeClass("on");

        }

    })


});



$(window).on('load', function () {




    // event 영역
    let swiper = new Swiper(".mySwiper3", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // sns 영역


    let vdLi = $(".sns_vd_list li"); //video list의 li들
    let vdLidx; //video list의 li의 순번
    let vd = $(".sns_vd"); //video 재생될 영역

    vdLi.children("div").on("click", function () {

        vdLidx = $(this).parent().index();
        vd.attr("src", "./video/sns_video0" + (vdLidx + 1) + ".mp4");

    });

    vdLi.children("div").on("mouseenter", function () {

        vdLidx = $(this).parent().index();
        $(this).children().attr("src", "./images/sns_img0" + (vdLidx + 1) + ".jpg")

    });

    vdLi.children("div").on("mouseleave", function () {

        vdLidx = $(this).parent().index();
        $(this).children().attr("src", "./images/snsbg_img0" + (vdLidx + 1) + ".gif")

    });


    // 모바일 메뉴 작동

    let mobileMenuWrap = $("#mobilemenu");
    let mobileBtn = $(".mobilemenu");
    let mobileCloseBtn = $("#mobile_close_btn");
    let mobileGrayLayer = $("<div id='mobile_graylayer'></div>");
    let mobileMenuWidth = $(window).innerWidth();
    let openHeight;
    let closeHeight = 63;
    let mobileMenu = $(".mobile_mainmenu>li");
    let mobileIcon = $(".mobile_icon");

    contentsReset()

    $(window).resize(function () {

        contentsReset()

    })


    function contentsReset() {

        mobileMenuWidth = $(window).innerWidth()
        mobileMenuWrap.css({
            "height": $(window).innerHeight(),
            "width": mobileMenuWidth,
            "right": -mobileMenuWidth

        })
    }

    // 모바일 메뉴 열리고 닫히는 작업 
    mobileBtn.on("click", mobileMenuOpen)
    mobileCloseBtn.on("click", mobileMenuClose)

    function mobileMenuOpen() {


        mobileGrayLayer.show()
        mobileGrayLayer.prependTo(mobileMenuWrap)
        mobileMenuWrap.animate({
            "right": 0
        }, 500, "easeOutCubic") // 모바일 메뉴 열리는 에니메이션 실행 

    } // 모바일 메뉴 열리는 함수 


    function mobileMenuClose() {

        mobileGrayLayer.hide()
        mobileMenuWrap.animate({
            "right": -mobileMenuWidth
        }, 500, "easeOutCubic")
    } // 모바일 메뉴 닫히는 함수 


    // 모바일 메뉴 클릭시 서브메뉴 보여지게 해주는 작업 
    mobileMenu.each(function (isOpen, data) {
        $(this).data("isOpen", false)
    })

    mobileMenu.on("click", onMobileMenuClick)


    function onMobileMenuClick() {


        if ($(this).data("isOpen") == false) {

            onMobileMenuClose()

            openHeight = closeHeight + $(".mobilesubmenu_list").children().outerHeight() * $(this).children(".mobilesubmenu_list").children().length



            $(this).stop()
            $(this).animate({
                "height": openHeight
            })

            $(this).children("span").addClass("mobile_selected") // 화살표 아이콘 활성화 (회전)

            $(this).data("isOpen", true) // 해당 메뉴의 상태를 열림으로 적용 

        } else {
            $(this).stop()
            $(this).animate({
                "height": closeHeight
            })

            $(this).children("span").removeClass("mobile_selected")

            $(this).data("isOpen", false)
        }
    }

    function onMobileMenuClose() { // 모든 모바일 메뉴를 닫히게 하는 명령 

        mobileMenu.stop()
        mobileMenu.animate({
            "height": closeHeight
        })
        mobileIcon.removeClass("mobile_selected");

        mobileMenu.each(function (isOpen, data) {

            $(this).data("isOpen", false)
        })
    }

    // 토핑영역
    onTopping()

    function onTopping() { //



        if ($(window).width() >= 900) {


            $(".topp_list li").hover(function () {

                $(this).toggleClass("toppOn");

            })

        }


    }



})
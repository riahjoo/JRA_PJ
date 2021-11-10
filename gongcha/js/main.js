$(window).on('load', function () {

    // main visual 슬라이드 

    let visualInner
    let visualList
    let visualLi
    let visualImg
    let btnImg
    let visualImgNum
    let visualWidth
    let timer
    let dot
    let visualOverNum = 0

    init(); // 초기함수
    visualReset();
    onShowDot(0);
    onPlay();
    inEvent();

    function init() {
        visualInner = $(".visual");
        visualList = $(".visual_list");
        visualLi = visualList.children()
        visualImg = $(".visual_list li img");
        btnImg = $(".visual_arrow img");
        visualImgNum = visualLi.length;
        visualList.children().last().prependTo(visualList);
        dot = $(".bullet").children();

    } // init 함수

    function visualReset() {

        visualWidth = visualInner.width();
        visualLi.css({
            width: visualWidth
        });
        visualImg.css({
            width: visualWidth * 0.84
        });

        visualList.css({
            width: visualWidth * visualImgNum,
            left: -visualWidth * 2
        });


    } // visualReset 함수 : 초기 설정

    function inEvent() {

        $(window).on("resize", visualReset);
        $(".right_arrow").on("click", onVisualSlideNext);
        $(".left_arrow").on("click", onVisualSlidePrev);


        visualImg.on("mouseleave", onPlay);
        visualImg.on("mouseenter", onStop);
        btnEvent();


    } // inEvent 함수 


    function btnEvent() {

        btnImg.on("mouseenter", onStop)
        btnImg.on("mouseleave", onPlay)
        dot.on("mouseenter", onShowDot)
        dot.on("mouseleave", onPlay)
       

    } // btnEvent 함수 : 마우스 이벤트



    function onShowDot() {

        
        dot.eq(visualOverNum).addClass("selected").siblings().removeClass("selected"); // 선택된 dot 에만 활성화 배경색 적용 

    }





    function onVisualSlideNext() {


        let currentPosition = visualList.position().left

        $(".visual_list:not(:animated)").animate({
            left: currentPosition - visualWidth

        }, 400, "easeOutCubic", function () {
            visualOverNum++;
            if (visualOverNum === visualImgNum) visualOverNum = 0;
            onShowDot(visualOverNum)
            visualList.children().first().appendTo(visualList)
            visualList.css({
                left: -visualWidth * 2
            })

        })

    } // 왼쪽으로 애니메이션 (슬라이드) 


    function onVisualSlidePrev() {

        let currentPosition = visualList.position().left

        $(".visual_list:not(:animated)").animate({
            left: currentPosition + visualWidth
        }, 400, "easeOutCubic", function () {
            visualOverNum--;
            if (visualOverNum === -1) visualOverNum = visualImgNum - 1;
            onShowDot(visualOverNum)
            visualList.children().last().prependTo(visualList)
            visualList.css({
                left: -visualWidth * 2
            })

        })

    } // 오른쪽으로 에니메이션 (슬라이드) 





    function onPlay() {

        timer = setInterval(onVisualSlideNext, 3000)

    }

    function onStop() {

        clearInterval(timer)

    }



    let swiper = new Swiper(".mySwiper", {
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
        }

    }); // swiper //




});


$(document).ready(function () {

    ///////// 모바일 이미지로 변경(세로형)
    if ($(window).innerWidth() < 750) {

        mobileImage()

    } // if문 (width : 750px이하 일때 함수 실행)


    function mobileImage() {

        let mi = $(".swiper-wrapper").children(); // mobile image
        let ich; // image change

        for (i = 0; i < 5; i++) {

            ich = mi.eq(i).children();
            console.log(i)
            ich.attr("src", "images/top_Mimg0" + (i + 1) + ".gif");

        } // for문



    } /////// 모바일 이미지로 변경(세로형)함수


})
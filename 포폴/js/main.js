$(window).load(function () {

    // main visual 슬라이드 


    let $visualWrap
    let $visualInner
    let $visualList
    let $visualLi
    let $visualImg
    let $btnImg
    let visualImgNum
    let visualWidth
    let timer

    init() // 초기함수
    visualReset()
    onPlay()
    inEvent()

    function init() {
        $visualWrap = $("#visual");
        $visualInner = $(".visual");
        $visualList = $(".visual_list");
        $visualLi = $visualList.children()
        $visualImg = $(".visual_list li img");
        $btnImg = $(".visual_arrow span")
        visualImgNum = $visualLi.size();
        $visualList.children().last().prependTo($visualList);

    } // init 함수

    function visualReset() {

        visualWidth = $visualInner.innerWidth();
        $visualLi.css({
            "width": visualWidth
        });
        $visualImg.css({
            "width": visualWidth * 0.9
        });
        $visualList.css({
            "width": visualWidth * visualImgNum
        });
        $visualWrap.css({
            "height": $visualImg.outerHeight()
        });
        $visualList.css({
            "left": -visualWidth * 2
        });

    } // visualReset 함수 : 초기 설정

    function inEvent() {

        $(window).on("resize", visualReset);
        $(".right_arrow").on("click", onVisualSlideNext);
        $(".left_arrow").on("click", onVisualSlidePrev);

        $visualImg.on("mouseleave", onPlay);
        $visualImg.on("mouseenter", onStop);
        btnEvent();

    } // inEven 함수 


    function btnEvent() {

        $btnImg.on("mouseenter", onStop)
        $btnImg.on("mouseleave", onPlay)

    } // btnEvent 함수 : 마우스 이벤트

    function onVisualSlideNext() {

        let currentPosition = $visualList.position().left

        $(".visual_list:not(:animated)").animate({
            "left": currentPosition - visualWidth
        }, 400, "easeOutCubic", function () {

            $visualList.children().first().appendTo($visualList)
            $visualList.css({
                "left": -visualWidth * 2
            })

        })

    } // 왼쪽으로 애니메이션 (슬라이드) 

    function onVisualSlidePrev() {

        let currentPosition = $visualList.position().left

        $(".visual_list:not(:animated)").animate({
            "left": currentPosition + visualWidth
        }, 400, "easeOutCubic", function () {

            $visualList.children().last().prependTo($visualList)
            $visualList.css({
                "left": -visualWidth * 2
            })

        })

    } // 오른쪽으로 에니메이션 (슬라이드) 


    function onPlay() {

        timer = setInterval(onVisualSlideNext, 3000)

    }

    function onStop() {

        clearInterval(timer)

    }




});
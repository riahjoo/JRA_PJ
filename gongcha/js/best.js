$(window).on('load', function () {

    // best best 슬라이드 

    let bestInner
    let bestList
    let bestLi
    let bestImg
    let bestBtnImg
    let bestImgNum
    let bestWidth
    let timer
    let bestOverNum = 0
    let bestDot

    bestInit(); // 초기함수
    bestReset();
    bestOnPlay();
    bestInEvent();
    onBestShowDot(0);

    function bestInit() {
        bestInner = $("#best_contents");
        bestList = $(".best_contents");
        bestLi = bestList.children("li")
        bestImg = $(".best_contents li img");
        bestBtnImg = $(".best_arrow img");
        bestImgNum = bestLi.length;
        bestList.children().last().prependTo(bestList);
        bestDot = $(".best_b li");
    } // init 함수
  
    function bestReset() {

        bestWidth = bestInner.width();
        bestLi.css({
            width: bestWidth
        });

        bestList.css({
            width: bestWidth * bestImgNum,
            left: -bestWidth * 2
        });



    } // bestReset 함수 : 초기 설정

    function bestInEvent() {

        $(window).on("resize", bestReset);
        $(".best_right_arrow").on("click", onbestSlideNext);
        $(".best_left_arrow").on("click", onbestSlidePrev);

        bestImg.on("mouseleave", bestOnPlay);
        bestImg.on("mouseenter", bestOnStop);
        bestBtnEvent();

    } // inEven 함수 


    function bestBtnEvent() {

        bestBtnImg.on("mouseenter", bestOnStop)
        bestBtnImg.on("mouseleave", bestOnPlay)

    } // bestBtnEvent 함수 : 마우스 이벤트

   
    let Num=1;//종류 순번
   

    function  sortOn(bb) {

        let pm = "종류"+bb; // 종류 문자 담는 변수
        let tx = pm.toString(); // 문자화
        let data = binfo[tx];
        $(".best_topp img").attr("src", data["이미지"]);
        $(".best_topp_sort").text(data["토핑"]);
        $(".best_topp_priceL").text(data["large"]);
        $(".best_topp_priceJ").text(data["jumbo"]);
       

    }// best_info 부분 내용 변경.

   

    function onbestSlideNext() {
       
        let currentPosition = bestList.position().left

        $(".best_contents:not(:animated)").animate({
            left: currentPosition - bestWidth

        }, 400, "easeOutCubic", function () {
            Num++;
            if (Num > bestImgNum) Num = 1;
            sortOn(Num);

            bestOverNum++;
            if (bestOverNum === bestImgNum) bestOverNum = 0;
            onBestShowDot(bestOverNum)

            bestList.children().first().appendTo(bestList)
            bestList.css({
                left: -bestWidth * 2
            })

        })
      

    } // 왼쪽으로 애니메이션 (슬라이드) 

    function onbestSlidePrev() {

        let currentPosition = bestList.position().left
        
        $(".best_contents:not(:animated)").animate({
            left: currentPosition + bestWidth
        }, 300, "easeOutCubic", function () {
            Num--;
            if (Num === 0) Num = bestImgNum;
            sortOn(Num);

            bestOverNum--;
            if (bestOverNum === -1) bestOverNum = bestImgNum - 1;
            onBestShowDot(bestOverNum);

            bestList.children().last().prependTo(bestList)
            bestList.css({
                left: -bestWidth * 2
            })


        })

    } // 오른쪽으로 에니메이션 (슬라이드) 

    
    function onBestShowDot() {
        bestDot.eq(bestOverNum).addClass("selected").siblings().removeClass("selected"); 
        

    } // bullet 보여주기


    function bestOnPlay() {

        timer = setInterval(onbestSlideNext, 3000)

    }

    function bestOnStop() {

        clearInterval(timer)

    }


    let swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    ///// 각 데이터 셋팅하기 /////
    let binfo = {
        "종류1": {
            "이미지": "./images/best_topp.jpg",
            "토핑": "펄(타피오카)",
            "large": "할인가 4,200원(정상가 4,500원)",
            "jumbo": "할인가 5,400원(정상가 5,800원)",
        },
        "종류2": {
            "이미지": "./images/best_topp.jpg",
            "토핑": "펄(타피오카)",
            "large": "할인가 4,200원(정상가 4,500원)",
            "jumbo": "할인가 5,400원(정상가 5,800원)",
        },
        "종류3": {
            "이미지": "./images/best_topp02.gif",
            "토핑": "알로에",
            "large": "할인가 4,500원(정상가 4,800원)",
            "jumbo": "할인가 5,700원(정상가 6,100원)",
        },
        "종류4": {
            "이미지": "./images/best_topp03.gif",
            "토핑": "화이트펄",
            "large": "할인가 5,200원(정상가 5,500원)",
            "jumbo": "할인가 6,400원(정상가 6,800원)",
        },
        "종류5": {
            "이미지": "./images/best_topp.jpg",
            "토핑": "펄(타피오카)",
            "large": "할인가 4,900원(정상가 5,200원)",
            "jumbo": "할인가 6,100원(정상가 6,500원)",

        },

    }; ////////// best_info 부분 데이터 세팅 ////////////////

  
})



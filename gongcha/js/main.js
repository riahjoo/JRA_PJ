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
    let visualOverNum=0

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


    } // inEven 함수 
    let bdx;

    function onDotOver(){ // 마우스를 dot 에 올릴때 실행할 함수 
        onStop();
        bdx=$(this).index();// 마우스를 올린 dot 순번을 구함 
        visualOverNum=bdx;
        if(visualOverNum === visualImgNum) visualOverNum = 0;
        
        
        onVisualSlide(visualOverNum);// 실패..
        onShowDot(visualOverNum);  // 성공..

    }/////////////////////////모르겠어요ㅠㅠ...



    function onVisualSlide(overNum){ // 매개변수에 따른 비주얼 리스트를 슬라이드 하는 함수 
               
        $(".visual_list:not(:animated)").animate({
            "left":-visualWidth*overNum}
            ,500,"easeOutCubic")

    }//////////////////////////모르겠어요ㅠㅠ...

   
    function onShowDot(overNum){ // 매개변수에 따른 dot 배경색을 활성화 하는 함수 

        dot.removeClass("selected"); // 기존에 활성화된 배경색 모두 해제 
        dot.eq(overNum).addClass("selected") // 선택된 dot 에만 활성화 배경색 적용 
  
    }
  

    function btnEvent() {

        btnImg.on("mouseenter", onStop)
        btnImg.on("mouseleave", onPlay)
        dot.on("mouseenter", onDotOver)	
        dot.on("mouseleave", onPlay)
        // 마우스를 dot에 올릴때 실행할 함수 적용 

    } // btnEvent 함수 : 마우스 이벤트



    function onVisualSlideNext() {

       
        let currentPosition = visualList.position().left
        
        $(".visual_list:not(:animated)").animate({
            left: currentPosition - visualWidth

        }, 400, "easeOutCubic", function () {
            visualOverNum++;
            if(visualOverNum === visualImgNum) visualOverNum = 0;
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
            if(visualOverNum === -1) visualOverNum= visualImgNum-1;
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

    // menuActive()

    // function menuActive() {

    //   var mainMenu = $("#mainmenu>li").children().first(); 
    //   let mainMenuS = mainMenu.eq(1);//한글로
      

    //   var subMenu = $(".submenu"); 

    //   mainMenu.on("mouseenter focus", onMenuOver)
    // //   subMenu.css("opacity", 0);
    // //   subMenu.hide(); 
     
    //   function onMenuOver() {
    //     // mainMenuOut(); // 기존에 활성화 되어있는 메인메뉴를 비활성화 적용 
    //     // subMenuOut(); // 기존에 활성화 되어있는 서브메뉴를 비활성화 

    //     mainMenuOver($(this)) // 마우스를 올린 메인메뉴활성화 (매개변수활용)
    //     // subMenuOver($(this)); // 마우스를 올린 메인메뉴의 서브메뉴만 활성화 (매개변수활용)

    //   }

      
    //   }

    //   function mainMenuOver(newMenu) {
    //     newMenu.stop(); 
    //     newMenu.animate({
    //         "top":-121

    //     }, 200, "easeOutCubic");

        

    //   }
     
       
      		

    // //   $("#header_inner").on("mouseleave", onMenuOut); // 메뉴전체를 감싸고 있는 div#header_inner 에서 마우스아웃될때 		
    // //   $(".submenu_list").find("a").last().on("focusout", onMenuOut); // 맨 마지막 서브메뉴에서 키보드가 나가면 모든 메인메뉴와 서브메뉴를 비활성화 		


    // //   function onMenuOver() {
    // //     mainMenuOut(); // 기존에 활성화 되어있는 메인메뉴를 비활성화 적용 
    // //     subMenuOut(); // 기존에 활성화 되어있는 서브메뉴를 비활성화 

    // //     mainMenuOver($(this)) // 마우스를 올린 메인메뉴활성화 (매개변수활용)
    // //     subMenuOver($(this)); // 마우스를 올린 메인메뉴의 서브메뉴만 활성화 (매개변수활용)

    // //   }

    // //   function onMenuOut() { // 메뉴전체를 감싸고 있는 #header_inner 에서 마우스아웃될때 모든 메인메뉴와 서브메뉴를 비활성화
    // //     mainMenuOut();
    // //     subMenuOut();
    // //   }


     



    // //   function mainMenuOut() {
    // //     mainMenu.stop();
    // //     mainMenu.animate({
    // //       "top": 0
    // //     }, 200, "easeOutCubic");
    // //     // 기존에 활성화된 메인메뉴의 a 테그(이미지를포함) 를 원위치로 내려주면서 에니메이션 (비활성화) 			
    // //   }

    // //   function subMenuOver(newMenu) {
    // //     newMenu.parent().next()
    // //   .show(); // 마우스를 올린메뉴에 해당되는 서브메뉴만 보여줌 ( 해당 서브메뉴는 $(this) 를 기준으로 직계부모요소 의 다음요소가 된다. (parent().next() ) 
    // //     newMenu.parent().next().stop();
    // //     newMenu.parent().next().animate({
    // //       "left": -30,
    // //       "opacity": 1
    // //     }, 200, "easeOutCubic"); // 서브메뉴를 왼쪽으로 -30 만큼이동하면서 보여지는 에니메이션 
    // //     // 중요) 각메뉴 li를 기준으로 좌표를 지정했기 때문에 모든 서브메뉴의 좌표가 동일 		
    // //   }

    // //   function subMenuOut() {
    // //     $subMenu.stop();
    // //     $subMenu.animate({
    // //       "left": 0,
    // //       "opactiy": 0
    // //     }, 50, "easeOutCubic", function () {
    // //       // 서브메뉴를 오른쪽 0으로 다시원위치 하고 에니메이션이 끝나면 사라지게해줌 (사라지지않으면 다른서브메뉴와 겹침 )
    // //       $(this).hide();
    // //     });
    // //   }


    // }; // menuActive함수 


   
    

})
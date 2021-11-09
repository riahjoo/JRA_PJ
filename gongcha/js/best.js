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

   bestInit(); // 초기함수
   bestReset();
   bestOnPlay();
   bestInEvent();

   function bestInit() {
       bestInner = $("#best_contents");
       bestList = $(".best_contents");
       bestLi = bestList.children("li")
       bestImg =  $(".best_contents li img");
       bestBtnImg = $(".best_arrow img");
       bestImgNum = bestLi.length;
       bestList.children().last().prependTo(bestList);

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

       bestImg.on("mouseleave",  bestOnPlay);
       bestImg.on("mouseenter", bestOnStop);
       bestBtnEvent();

   } // inEven 함수 


   function bestBtnEvent() {

       bestBtnImg.on("mouseenter", bestOnStop)
       bestBtnImg.on("mouseleave",  bestOnPlay)

   } // bestBtnEvent 함수 : 마우스 이벤트
   

   function onbestSlideNext() {

       let currentPosition = bestList.position().left
      
       $(".best_contents:not(:animated)").animate({
           left: currentPosition - bestWidth

       }, 400, "easeOutCubic", function () {
       
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

           bestList.children().last().prependTo(bestList)
           bestList.css({
               left: -bestWidth * 2
           })
       

       })

   } // 오른쪽으로 에니메이션 (슬라이드) 


   function  bestOnPlay() {

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



})


$(function(){


    ///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
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
  
  }; ////////// sinfo ////////////////

   
    let pm = $(".sort").text();
    console.log(pm);
    
    

    let data = sinfo[pm];
   
    let bestToppImg = $(".best_topp img");

    bestToppImg.attr("src",data["이미지"]);

    // let toppName = $(".best_topp_sort");

    // toppName.text(data["토핑"]);


    


})// best_info부분 내용변경(text,img)

   



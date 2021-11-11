// 상단메뉴 

/// 모바일 여부 구분 상태변수
let mob = 0;//////// 1-모바일,0-모바일 아님

let reFn = () => {

    if($(window).width()<= 1200) {
        mob = 1;
        $("#top").removeClass("on");

    }
    else {
        mob = 0;
    }

};
reFn();
$(window).resize(reFn);


$(function () {

    $("html,body").animate({

      scrollTop:"0px"

    },100)

    // 스크롤 위치변수
    let scTop;
    
    let scSts = 1;// 실행 전 1, 실행 후 0
  
    // 상단영역 요소
    let tm = $("#top");


    $(window).scroll(function(){

         
          scTop = $(this).scrollTop();
          console.log("스위:"+scTop);
       
          if(mob) return;
          
          if(scTop >= 100 && scSts===1){

              scSts=0;
              console.log("실행1");
              tm.addClass("on");
          }

          else if(scTop < 100 && scSts===0){
              scSts=1;
              console.log("실행2");
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

    
        let vdLi = $(".sns_vd_list li");
        let vdLidx;
        let vd = $(".sns_vd");
      
        
        vdLi.children("div").on("click",function () {

            vdLidx = $(this).parent().index();
            vd.attr("src","./video/sns_video0"+(vdLidx+1)+".mp4");

        });

        vdLi.children("div").on("mouseenter",function () {

            vdLidx =  $(this).parent().index();
            $(this).children().attr("src","./images/sns_img0"+(vdLidx+1)+".jpg")
            
        });

        vdLi.children("div").on("mouseleave",function () {

            vdLidx =  $(this).parent().index();
            $(this).children().attr("src","./images/snsbg_img0"+(vdLidx+1)+".gif")
            
        });
    
})




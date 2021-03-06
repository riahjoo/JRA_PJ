// 자동 스크롤 기능


/// 모바일 여부 코드 //
let mob = 0;//0-모바일 아님, 1-모바일


let reFn = () => {

    if($(window).width() < 963) {
        mob = 1;
    } else {
        mob = 0;
    }

};

reFn();
$(window).resize(reFn);

// 현재 페이지 번호
let pno = 0;

// 전체 페이지 개수
const totnum = 5;

// 광스크롤막기(0-허용,1-불허용)
let psts = 0;




$(function () {

    $("html,body").animate({

        scrollTop: "0px"

    }, 100)

    // 스크롤 위치변수
    let scTop;

    let scSts = 1; // 실행 전 1, 실행 후 0

    // 상단영역 요소
    let hw = $("#header_wrap");

    $(window).scroll(function () {


        scTop = $(this).scrollTop();
    
        if (scTop >= 100 && scSts === 1) {

            scSts = 0;
        
            hw.addClass("mobile");
            $(".mobilemenu_icon img").attr("src","images/mbtn2.png");


        } else if (scTop < 100 && scSts === 0) {
            scSts = 1;
            
            hw.removeClass("mobile");
            $(".mobilemenu_icon img").attr("src","images/mbtn.png");
        }

    })
});


$(function () {

    $("#mainmenu li").eq(pno).addClass("on")
    .siblings().removeClass("on");
    
    $(document).on("mousewheel DOMMouseScroll",


        function (e) { //e-이벤트 전달변수

            // 모바일일때 기능막기
            if(mob) return;

            ////// 광스크롤막기 /////////////
            if (psts) return; //돌아가!
            psts = 1; //불허용상태변경!
            setTimeout(() => {
                psts = 0;
            }, 1200);


            // 마우스휠 방향 알아내기!///
            e = window.event || e;

            let delta = e.detail ? e.detail : e.wheelDelta;

            if (/Firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대!
            } ///////// 파이어폭스여부 if문 /////////////


            // 마우스휠 방향에 따라 페이지번호 증감하기!//
            if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
                pno++;
                if (pno === totnum) pno = totnum - 1;
                // 마지막페이지에 고정하기!
            } ////// if ///////////
            else { // 120 윗방향 스크롤(이전페이지)
                pno--;
                if (pno === -1) pno = 0;
                // 첫페이지에 고정하기!
            } /////// else ////////

            // 이동할 페이지(.section)의 위치값 알아내기 ///        

            let pos = $(window).height() * pno;


            // 실제 이동위치로 스크롤 애니메이션 하기 ////

            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 1200, "easeOutQuint");



            //  페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
            // 변경대상: #mainmenu li
            $("#mainmenu li").eq(pno).addClass("on")
                .siblings().removeClass("on");



                

        });





});
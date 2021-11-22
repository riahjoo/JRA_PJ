// GNB 링크 이동 셋팅하기 


$(function () {

    $("#mainmenu li a").click(function (e) {

        // 기본이동막기
        e.preventDefault();

    });

    $("#mainmenu li").click(function () {

        let idx = $(this).index();

        pno = idx;


        // 전체 윈도우(window)화면 높이값 단위로 이동위치 만들기
        let pos = $(window).height() * pno;

        // 실제 위치로 페이지 이동하기 

        $("html,body").animate({
            scrollTop: pos + "px"
        }, 800, "easeInOutQuart");

        // 현재 페이지에 해당하는 메뉴에 클래스 on넣기!
        $("#mainmenu li").eq(pno).addClass("on").siblings().removeClass("on");

    });//click 

    $("#arrow img").click(function () {

        pno=1;
        pos = $(window).height() * pno;

        $("html,body").animate({
            scrollTop: pos + "px"
        }, 800, "easeInOutQuart");

        $("#mainmenu li").eq(pno).addClass("on").siblings().removeClass("on");


    });



});
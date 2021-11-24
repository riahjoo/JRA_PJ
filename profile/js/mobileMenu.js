 // 모바일메뉴 작동 
 $(window).on('load', function () {

    
    let $mobileMenuWrap = $("#mobilemenu") // 모바일 메뉴 전체영역 
    let $mobileBtn = $(".mobilemenu_icon") // 모바일 메뉴 아이콘
    let $mobileCloseBtn = $("#mobileclose_btn") // 모바일메뉴 닫기 아이콘
    let $mobileGrayLayer = $("<div id='mobile_graylayer'></div>") // 모바일 메뉴 활성화시 문서 전체 어둡게 해주는 div 생성 
    let mobileMenuWidth = $(window).innerWidth() // 모바일 메뉴 전체영역의 가로크기 ( 윈도우 크기의 87% - 유동적 지정 )
    
   
    
    $mobileMenuWrap.css({
        "width": mobileMenuWidth,
        "height": $(window).innerHeight(),
        "right": -mobileMenuWidth
    })
   

    // 모바일 메뉴 열리고 닫히는 작업 

    $mobileBtn.on("click", mobileMenuOpen) // 모바일 아이콘 클릭시 모바일 메뉴 열리는 함수 실행 
    $mobileCloseBtn.on("click", mobileMenuClose) // 모바일 닫히는 아이콘 클릭시 모바일 메뉴 닫히는 함수 실행 




    function mobileMenuOpen() { // 모바일 메뉴 열리는 함수 

        

        $mobileBtn.hide()
        $mobileGrayLayer.show() // 어둡게 해주는 div 보여줌       
        $mobileGrayLayer.appendTo($("#header_wrap"))
        $mobileMenuWrap.animate({
            "right": 0
        }, 500, "easeOutCubic") // 모바일 메뉴 열리는 에니메이션 실행 
    }

    function mobileMenuClose() { // 모바일 메뉴 닫히는 함수 
        $mobileBtn.show()
        $mobileGrayLayer.hide() // 어둡게 해주는 div 사라짐 
        $mobileMenuWrap.animate({
            "right": -mobileMenuWidth
        }, 500, "easeOutCubic") // 모바일 메뉴 다시 닫히는 에니메이션 실행 
    }


    
})
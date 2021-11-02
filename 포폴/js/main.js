


$(window).load(function(){

// main visual 슬라이드 
    

    var $visualWrap
    var $visualInner
    var $visualList
    var $visualLi
    var $visualImg
    var $btnImg
    var visualImgNum
    var visualImgWidth
    var timer

    init() // 초기함수
    visualReset()

    function init(){
      $visualWrap=$("#visual"); // 비주얼전체 영역 
      $visualInner=$(".visual"); // 비주얼 영역 
      $visualList=$(".visual_list"); // 슬라이드할 비주얼리스트 
      $visualLi=$visualList.children()// 비주얼리스트의 각 li
      $visualImg=$(".visual_list img"); // 비주얼리스트안의 각 이미지들 
      $btnImg=$(".visual_arrow span") // 좌우버튼 이미지 
      visualImgNum=$visualList.children().size();	// 슬라이드할 비주얼이미지의 총갯수           
      $visualList.children().last().prependTo($visualList); // 맨마지막 이미지를 왼쪽 처음으로 이동 ( 우측으로 슬라이드 할수있게 붙여줌 ) 

      $visualList.css({
          border: "1px solid red"
      });
      $visualList.children().last().css({
        border: "2px solid blue"
      });

     
    }// init 함수

    function visualReset(){

        visualImgWidth=$visualInner.innerWidth(); 
        $visualLi.css({"width":visualImgWidth})
        $visualImg.css({"width":visualImgWidth}); 
        $visualWrap.css({"height": $visualImg.outerHeight()}); 
       
        $visualList.css({"width":visualImgWidth*visualImgNum}); 
        $visualList.css({"left": -visualImgWidth*2}); 
    }
          


 });

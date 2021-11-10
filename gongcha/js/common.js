// event 영역


$(window).on('load', function () {
    
    

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




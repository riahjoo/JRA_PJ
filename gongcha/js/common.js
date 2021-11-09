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
snsVD()

    


    function snsVD() {
        
        let vdLi = $(".sns_vd_list li");
        let vdLidx;
        let vd = $(".sns_vd");

        
        vdLi.children("div").click(function () {

            vdLidx = $(this).parent().index();
            vd.attr("src","./video/sns_video0"+(vdLidx+1)+".mp4");
        
            

        })

        
    } 

    
})




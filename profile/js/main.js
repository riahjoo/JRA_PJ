

$(window).on('load', function () {
    
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          clickable: true,
          el: ".swiper-pagination",
        },
      });


    export default function preventZoom() {
  function listener(event: TouchEvent) {
    // 핀치 줌의 경우 두 개 이상의 이벤트가 발생한다.
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }

  document.addEventListener('touchmove', listener, { passive: false });
}
preventZoom();


})

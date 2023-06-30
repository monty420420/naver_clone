//3초뒤 이미지변환
//3초뒤에 class이름을 변경하여 원하는 이미지로 변경 
function changeImg(){
  setTimeout(function(){ 
   const element = document.querySelector(".header_search_form_logo_wing");
   element.className = 'header_search_form_logo_naver';  //여기서 .없이해야함
  },3000);
}
changeImg();




//스크롤 이동
document.addEventListener('DOMContentLoaded', function() {
    let scrollUpButton = document.querySelector('.setting_scroll-up');
    scrollUpButton.addEventListener('click', function() {
      scrollToTop(500); // 화면 맨 위로 스크롤 애니메이션 적용 (500ms 동안)
    });
  
    function scrollToTop(duration) {
      let scrollHeight = window.scrollY;
      let scrollStep = Math.PI / (duration / 30);
      let cosParameter = scrollHeight / 2;
      let scrollCount = 0;
      let scrollMargin;
      requestAnimationFrame(step);
  
      function step() {
        setTimeout(function() {
          if (window.scrollY !== 0) {
            scrollCount += 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollHeight - scrollMargin));
            requestAnimationFrame(step);
          }
        }, 15);
      }
    }
  
  });
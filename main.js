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
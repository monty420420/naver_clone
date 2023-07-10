//스크롤 내릴시 navbar생성






//3초뒤 이미지변환
//3초뒤에 class이름을 변경하여 원하는 이미지로 변경 
function changeImg(){
  setTimeout(function(){ 
   const element = document.querySelector(".header_search_form_logo_wing");
   element.className = 'header_search_form_logo_naver';  //여기서 .없이해야함
  },3000);
}
changeImg();




//뉴스 페이지 이동
  // 현재 페이지를 나타내는 변수
  let currentPage = 1;
  
  //이전페이지
  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      showCurrentPage();
      innerhtml();  //페이지 변환후에도 동적인 데이터를 적용시키기위해 innerhtml(); 함수실행
    }
  }
   //다음페이지
  function nextPage() {
    if (currentPage < 4) {
      currentPage++;
      showCurrentPage();
      innerhtml(); //페이지 변환후에도 동적인 데이터를 적용시키기위해 innerhtml(); 함수실행
    }
  }

  function showCurrentPage() {
    const pages = document.getElementsByClassName("news_page");

    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    // console.log(currentPage)
    document.getElementById("news_page" + currentPage).style.display = "flex";
  }

  showCurrentPage();

  //뉴스 페이지 동적인 데이터 삽입
  function innerhtml() {
    let container = document.querySelector(".news_step_text-2");
    container.innerText = `더보기 ${currentPage}/4`;
    // console.log(currentPage)
  }
  innerhtml();




//날씨데이터 삽입







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
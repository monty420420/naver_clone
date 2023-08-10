/* 스크롤 내릴시 navbar생성 */
function scrollNavbar(){
  const navbar = document.querySelector(".navbar")
  const Header = document.querySelector(".header")  //header가 안보일때 navbar를 보여주기위해 class를 변수에 담아 기준으로 삼음
  const HeaderHeight = Header.getBoundingClientRect().height;  //header의 높이의값
  // console.log(navbar);
  // console.log(HeaderHeight);
  // console.log(window.scrollY);
  document.addEventListener('scroll', ()=> {
    if(window.scrollY > HeaderHeight){  //스크롤y축이 header의 높이값보다 크면
      // console.log(window.scrollY);
      navbar.classList.remove('drop')  //class 'drop'삭제
    }else{
      navbar.classList.add('drop') //class 'drop' 추가
    }
  })
}
scrollNavbar();


/* 햄버거 클릭시 모달창 */
function hambergerClicked() {
  const hamberger = document.querySelector(".header_simple_hamburger");
  const hambergerButton = document.querySelector(".header_simple_hamburger_img");
  const modal = document.querySelector(".header_simple_hamburger_modal");
  const modalContent = document.querySelector(".modal"); //modal클래스 안의 div 변수

  hambergerButton.addEventListener('click', function() {
    modal.style.display = "block"; 
    hamberger.classList.add("active");
  });
  
  //데이터버블링 방지 modalContent에 클릭 이벤트 리스너를 등록하고, event.stopPropagation()을 호출하여 클릭 이벤트가 modalContent에서 전파되지 않게함
  modalContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  document.addEventListener('click', function(event) {
    if (event.target !== hambergerButton && event.target !== modal) {
      
      modal.style.display = "none";
      hamberger.classList.remove("active");
    }
  });
}


/* naver logo 일정시간 지날때 이미지변경 */
function changeNavImg(){
  setTimeout(function(){ 
   const element = document.querySelector(".navbar_search_form_logo_wing");
   element.className = 'navbar_search_form_logo_naver';  //여기서 .없이해야함
  },3000);
}

changeNavImg();
function changeHeaderImg(){
  setTimeout(function(){ 
   const element = document.querySelector(".header_search_form_logo_wing");
   element.className = 'header_search_form_logo_naver';  //여기서 .없이해야함
  },3000);
}
changeHeaderImg();


/* navbar검색창, main검색창 검색어 공유 */
const navbarInput = document.querySelector('.navbar_search_form_text_input');
const mainInput = document.querySelector('.header_search_form_text_input');

navbarInput.addEventListener('input', function() {
  const inputValue = navbarInput.value;
  mainInput.value = inputValue;
});

mainInput.addEventListener('input', function() {
  const inputValue = mainInput.value;
  navbarInput.value = inputValue;
});




/* 뉴스 페이지 이동 */
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





/* 스크롤 이동 */
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

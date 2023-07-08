'use strict';
//온도데이터

//openweather 온도데이터 테스트
// const getJSON = function(url, callback) {
//     const weather = new XMLHttpRequest();
//     weather.open('GET', url, true);
//     weather.responseType = 'json';
//     weather.onload = function() {
//       const status = weather.status;
//       if(status === 200) {
//         callback(null, weather.response);
//       } else {
//         callback(status, weather.response);
//       }
//     };
//     weather.send();
//   };
  
//   getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=9c59ac8c758bb7af6ec4afbc771e28fd&units=metric',
//   function(err, data) {
//     console.log(data)
//     if(err !== null) {
//       alert('예상치 못한 오류 발생.' + err);
//     } else {
//         console.log(data)
//       alert(`현재
//         온도는 ${data.main.temp}°
//         풍속은 ${data.wind.speed}m/s
//         습도는 ${data.main.humidity}%
//   입니다.
//   오늘의
//         최고기온은 ${data.main.temp_max}°
//         최저기온은 ${data.main.temp_min}°
//   입니다.`)
//     }
//   });


//데이터 삽입
const getJSON = function(url, callback) {
  const weather = new XMLHttpRequest();
  weather.open('GET', url, true);
  weather.responseType = 'json';
  weather.onload = function() {
    const status = weather.status;
    if(status === 200) {          //200은 http상태코드로 ok를 의미 성공적으로 처리되고 반환을 의미함
      callback(null, weather.response);
    } else {
      callback(status, weather.response);
    }
  };
  weather.send();
};

getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=9c59ac8c758bb7af6ec4afbc771e28fd&units=metric', function(err, data) {
  if(err !== null) {
    alert('예상치 못한 오류 발생.' + err);
  } else {
    currentWeather(data); // 수정: data를 currentWeather 함수로 전달
  }
});



function currentWeather(data) {
  //현재 온도
  let temp = document.querySelector(".weather_info_temp_main_data_number");
  let formattedTemp = data.main.temp.toFixed(1);
  temp.innerText = `${formattedTemp}°`;
  
  //최저온도
  let rowTemp = document.querySelector(".weather_info_temp_value_min")
  let formattedRowTemp = data.main.temp_min.toFixed(0);
  rowTemp.innerText = `${formattedRowTemp}°`;
  
  //최고온도
  let highTemp = document.querySelector(".weather_info_temp_value_max")
  let formattedHighTemp = data.main.temp_max.toFixed(0);
  highTemp.innerText = `${formattedHighTemp}°`;
}

'use strict';


//1.
// const api_key = "9c59ac8c758bb7af6ec4afbc771e28fd";
// /** 
//  * fetch data from server
// *@param {string} URL API url
// *@param {Function} callback callback
// */
// export const fetchData = function(URL, callback) {
//     fetch(`${URL}&appid=${api_key}`)
//      .then(res => res.json())
//      .then(data => callback(data));
// }

// console.log(api_key)


//2.
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
  
// //날씨 데이터 삽입
// function currentWeather(data) {
//   let weather = document.querySelector(".weather_info_temp_main_data_number")
//   weather.innerText = `${data.main.temp}°`
// }  
// currentWeather();

const getJSON = function(url, callback) {
  const weather = new XMLHttpRequest();
  weather.open('GET', url, true);
  weather.responseType = 'json';
  weather.onload = function() {
    const status = weather.status;
    if(status === 200) {
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
  let weather = document.querySelector(".weather_info_temp_main_data_number");
  let roundedTemp = Math.round(data.main.temp);
  weather.innerText = `${roundedTemp}°`;
}




//3.
// const apiKey = '9c59ac8c758bb7af6ec4afbc771e28fd';
// const city = 'seoul';

// // 오늘의 날짜(YYYY-MM-DD) 계산
// const now = new Date();
// const year = now.getFullYear();
// const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
// const day = String(now.getDate()).padStart(2, '0');

// // API 요청 URL 생성
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

// // 아침 온도 구하기 함수
// const getMorningTemperature = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
  
//       // 오늘의 예보 데이터 찾기
//       const todayForecast = data.list.find((forecast) => {
//         const forecastDate = forecast.dt_txt.split(' ')[0]; // 예보의 날짜 부분 추출
//         return forecastDate === `${year}-${month}-${day}`;
//       });
  
//       // 아침 시간(06:00)의 온도 가져오기
//       const morningTemperatureKelvin = todayForecast.main.temp;
//       const morningTemperatureCelsius = morningTemperatureKelvin - 273.15;
//       console.log(`오늘의 아침 온도: ${morningTemperatureCelsius.toFixed(1)}°C`);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

// // 아침 온도 구하기 함수 실행
// getMorningTemperature();
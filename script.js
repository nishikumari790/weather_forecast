function searchWeather(){

let city = document.getElementById("cityInput").value;

if(city==""){
alert("Please enter city name");
return;
}

document.getElementById("cityName").innerText = city;

let randomTemp = Math.floor(Math.random()*10)+25;
let randomHumidity = Math.floor(Math.random()*30)+50;
let randomWind = Math.floor(Math.random()*10)+5;

document.querySelector(".temp").innerText = randomTemp+"°C";
document.getElementById("humidity").innerText = randomHumidity+"%";
document.getElementById("wind").innerText = randomWind+" km/h";

}
let currentTime = new Date();

//console.log(currentTime.getDay());
//console.log(currentTime.getHours());
//console.log(currentTime.getMinutes());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//let currentMonth = currentTime.getMonth();
let currentDay = days[currentTime.getDay()];
//let currentYear = currentTime.getFullYear();
let currentMin = currentTime.getMinutes();
let currentHour = currentTime.getHours();

let timeFormat = `${currentDay} ${currentHour}:${currentMin}`;
////console.log(timeFormat);

let inputTime = document.querySelector("#timeInput");
inputTime.innerHTML = timeFormat;

//cel .fah JS

function showTempUnit(event) {
  event.preventDefault();
  let celcius = document.querySelector("#temperature");
  celcius.innerHTML = 20;
}

let celcius = document.querySelector("#celLink");
celcius.addEventListener("click", showTempUnit);

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  console.log(searchInput.value);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

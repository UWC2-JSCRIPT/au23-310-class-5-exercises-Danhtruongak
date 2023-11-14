// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById("weather-head");
header.innerText = "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
const ul = document.querySelector("ul");
const sun = ul.querySelectorAll(".sun");

const firstEl = sun[0];
firstEl.style.color = "orange";
const secondEl = sun[1];
secondEl.style.color = "orange";

// Change the class of the second <li> from to "sun" to "cloudy"
firstEl.classList.remove("sun");
firstEl.classList.add("cloudy");

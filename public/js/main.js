const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = "plz Write the name before serach";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3938648426b89d88b1cb9a7ae8f900ef`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;

      temp_real_val.innerHTML = arrData[0].main.temp;
      const temp_mood = arrData[0].weather[0].main;

      //   console.log(data);
    } catch {
      city_name.innerHTML = "Plz enter the city name properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);

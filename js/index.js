const cityName = document.getElementById("cityName");
const search = document.getElementById("search");

search.addEventListener("click", function () {
  getWeather(cityName.value);
});

let allArr = [];

getWeather("cairo");

async function getWeather(city) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a36154d89fba498f824114607240312&q=${city}&days=3&aqi=yes&alerts=yes`
    );
      
    let data = await response.json();
     
    allArr = data.forecast.forecastday ;




      displayWeather();
      displayCurrent(data);
      cityName.value = ''
    
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops... Something went wrong!",
      text: 'The country you entered does not exist',

 });
  
  }
}

function displayCurrent(data) {
  let cartonaa = "";

  let date = new Date(data.location.localtime);
  let day = date.getDate();
  let year = date.getFullYear();
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[date.getMonth()];

  let finallDAte = `${year}-${month}-${day}`;

  cartonaa += `
    <div class="inner">
      <div class="card shadow rounded-4">
        <div class="card-footer shadow text-center">
          <small class="text-body-secondary">${finallDAte}</small>
        </div>

        <div class="card-body one">
          <h5 class="card-title fw-bold fs-2">${data.location.name}</h5>
          <p class="card-text fw-bold fs-2 text-center">${data.current.temp_c} ْ C</p>
          <p class="text-center fs-3  d-flex flex-column">
           <img src="https:${data.current.condition.icon}" width="75" alt=""> 
           <span>${data.current.condition.text}</span>
          </p>
          <div class="iconsWeather mt-5 d-flex justify-content-around">
            <h5><i class="fa-solid fa-wind me-2"></i>${data.current.wind_mph}</h5>
            <h5><i class="fa-solid fa-droplet text-info me-2"></i>${data.current.humidity}</h5>
            
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("currentData").innerHTML = cartonaa;
}

function displayWeather() {
  let cartona = "";
  for (let i = 1; i < allArr.length; i++) {
    cartona += `<div class="col-md-6">
                <div class="inner">
                  <div class="card shadow rounded-4">
                    <div class="card-footer shadow text-center">
                      <small class="text-body-secondary">${allArr[i].date}</small>
                    </div>
      
                    <div
                      class="card-body two d-flex flex-column align-items-center mt-3"
                    >
                      <p class="text-warning fs-1">
                        <img src="https:${allArr[i].day.condition.icon}" alt="">
                      </p>
                      <p class="card-text fw-bold fs-2 ms-3">${allArr[i].day.maxtemp_c} ْ C</p>
                      <p class="card-text fw-bold fs-2 ms-3">${allArr[i].day.mintemp_c} ْ C</p>
                      <p class="card-text fs-4 ms-3 mt-3 text-warning">${allArr[i].day.condition.text}</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            `;
  }
  document.getElementById("forecast").innerHTML = cartona;
}

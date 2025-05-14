const apiKey = "c4dc6ccccc8a9327028dddcb63cb0c76";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


const city = document.querySelector("#cityEl");
const temperature = document.querySelector("#temperatureEl");
const weather = document.querySelector("#weatherEl");
const weatherSrc = document.querySelector("#weatherSrc");
const humidity = document.querySelector("#humidityEl");
const wind = document.querySelector("#windEl");


const weatherData = document.querySelector(".hide");

//Function
const getWeatherData = async(cityValue) =>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    return data;
};


const showData = async(cityValue) =>{
    const data = await getWeatherData(cityValue);

    city.textContent = data.name;
    temperature.textContent = `${parseInt(data.main.temp)}°C`;
    weather.textContent = data.weather[0].description;
    weatherSrc.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed}km/h`;

    weatherData.classList.remove('hide');
};
    

//Event
searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    cityValue = cityInput.value;
    
    showData(cityValue)
});

cityInput.addEventListener('keyup', (e) =>{
    if(e.code === 'Enter'){

        const city = e.target.value;
        showData(city)
    }
});


//Dark mode
const toggleBtn = document.querySelector("#toggle");

const toggleTheme = () =>{
    document.body.classList.toggle('dark');
};

const loadingTheme = () =>{
    const darkMode = localStorage.getItem('dark');

    if(darkMode){
        toggleTheme();
        toggleBtn.checked = !toggleBtn.checked;
    }
};

loadingTheme();

toggleBtn.addEventListener('click', () =>{
   toggleTheme();

   localStorage.removeItem('dark');

   if(document.body.classList.contains('dark')){
    localStorage.setItem('dark', true)
   }
});
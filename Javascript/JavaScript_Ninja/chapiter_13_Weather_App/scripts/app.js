
const cityForm = document.querySelector('.change-location');
const weatherCond = document.querySelector('#weatherCond');
const card = document.querySelector('.card');
const cityName = document.querySelector('h5.my-3');
const temperature = document.getElementById('temp');
const unit = document.getElementById('unit');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const getInputLocation = (e) => {
    const location = e.target.city.value;
    cityForm.reset();
    return location;
}

const updateCity = async (city) => {
    const cityInfos = await getCity(city);
    const weather = await getWeather(cityInfos)
    
    return {
        cityInfos: cityInfos,
        weather: weather
    };
};

const UpdatUI = function(details) {
    cityName.textContent = details.cityInfos.LocalizedName;
    temperature.textContent = details.weather.Temperature.Metric.Value;
    weatherCond.textContent = details.weather.WeatherText;
    unit.textContent += details.weather.Temperature.Metric.Unit;
}

const UpdateImg = function(details) {

    // update the night/day & icon images
    
    const iconSrc = `img/icons/${details.weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc)
    
    let timeSrc = null;

    if(details.weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc)
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = getInputLocation(e);

    cityDetails = updateCity(city)
    .then(details => {
        console.log(details);
        UpdatUI(details);
        UpdateImg(details);
        if (card.classList.contains('d-none')) 
            card.classList.remove('d-none')
    })
})



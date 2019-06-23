
const key = 'AiL4vZCiVqtPSBo6qTnvkaGqfdGzAhKv';

const getInfo = async (url) => {
    const promiseInfo = await fetch(url);
    const jsonInfos = promiseInfo.json();
    
    return jsonInfos;
};


const getCity = (cityInput) => {
    const city = cityInput;

    const cityBase =`http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query = `?apikey=${key}&q=${city}&details=true`; 
    
    const urlLocation = `${cityBase}${query}`;
    
    return getInfo(urlLocation)
        .then(data => {
            cityDets = data;
            return cityDets[0];
        })
        .catch(err => console.log(err))
}

const getWeather = (cityDetails) => {
    
    const weatherBase = `http://dataservice.accuweather.com/currentconditions/v1/`;

    return getInfo(`${weatherBase}${cityDetails.Key}?apikey=${key}&details=true`)
        .then(weatherInfo => {
            cityWeather = weatherInfo[0];
            console.log(cityWeather);
            return cityWeather;
        })
        .catch(err => console.log(err));
};

const key = 'AiL4vZCiVqtPSBo6qTnvkaGqfdGzAhKv';

const form = document.querySelector('.change-location');


const getLocation = (e) => {
    return e.target.city.value;
}

const getInfo = async (url) => {
    const promiseInfo = await fetch(url);
    const jsonInfos = promiseInfo.json();

    return jsonInfos;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = getLocation(e);

    const cityBase =`http://dataservice.accuweather.com/locations/v1/cities/search`
    const query = `?apikey=${key}&q=${city}&details=true`; 
    
    const urlLocation = `${cityBase}${query}`;

    const weatherBase = `http://dataservice.accuweather.com/currentconditions/v1/`

    const cityCode = getInfo(urlLocation)
                    .then(data => data[0].Key)
                    .then(cityKey => getInfo(`${weatherBase}${cityKey}?apikey=${key}&details=true`))
                    .then(weatherInfo => console.log(weatherInfo[0]));
})



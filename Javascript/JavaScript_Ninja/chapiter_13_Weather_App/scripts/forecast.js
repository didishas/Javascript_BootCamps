


class ForeCast {
    constructor() {
        this.key = 'AiL4vZCiVqtPSBo6qTnvkaGqfdGzAhKv';
        this.cityBaseURI =`http://dataservice.accuweather.com/locations/v1/cities/search`;
        this.weatherBase = `http://dataservice.accuweather.com/currentconditions/v1/`;
    }
    
    async getInfo(url) {
        const promiseInfo = await fetch(url);
        const jsonInfos = promiseInfo.json();
        
        return jsonInfos;
    };
    
    async updateCity (city) {
        const cityInfos = await this.getCity(city);
        const weather = await this.getWeather(cityInfos)
        
        return { cityInfos, weather };
    };
    
    async getCity (cityInput) {
        const city = cityInput;
        const cityUrlQuery = `?apikey=${this.key}&q=${city}&details=true`; 
        const urlLocation = `${this.cityBaseURI}${cityUrlQuery}`;
        
        return this.getInfo(urlLocation)
            .then(data => {
                const cityDets = data;
                return cityDets[0];
            })
            .catch(err => console.log(err))
    }

    async getWeather(cityDetails) {
        const weatherUrlQuery = `${this.weatherBase}${cityDetails.Key}?apikey=${this.key}&details=true`;
    
        return this.getInfo(weatherUrlQuery)
            .then(weatherInfo => {
                const cityWeather = weatherInfo[0];
                console.log(cityWeather);
                return cityWeather;
            })
            .catch(err => console.log(err));
    };
}





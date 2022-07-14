class Weather {
    constructor(city, countryCode) {
        this.apiKey = '0b00005266aed7c567dd30a60b090610';
        this.city = city;
        this.countryCode = countryCode;
    }

    // Fetch weather from API
    async getWeather() {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);

            const responseData = await response.data;
    
            return responseData;
        } catch(error) {
            console.log(error);
        }
    }

    // Change weather location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}
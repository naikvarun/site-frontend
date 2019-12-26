const axios = require('axios');
const {config} = require('../config');

function buildURL(latitude, longitude) {
    return `${config.WEATHER_API_URL}/${latitude},${longitude}`;
}

export default class WeatherService {
    tst = async function test() {

    };
    getWeather = async  function(latitude, longitude) {
        try {
            let api = buildURL(latitude, longitude);
            const result = await axios.get(api, {crossdomain: true});
            console.log(result);
            return result.data;
        } catch (e) {
            throw e;
        }
    }
}

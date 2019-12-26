const axios = require('axios');
const {config} = require('../config');

function buildLookupURL(latitude, longitude) {
    return `${config.WEATHER_API_URL}/lookup/${latitude},${longitude}`;
}

function buildListURL() {
    return `${config.WEATHER_API_URL}/list`;
}

export default class WeatherService {
    getWeather = async  function(latitude, longitude) {
        try {
            let api = buildLookupURL(latitude, longitude);
            const result = await axios.get(api, {crossdomain: true});
            return result.data;
        } catch (e) {
            throw e;
        }
    };

    getPreviousLookup = async function() {
        try {
            let api = buildListURL();
            const result = await axios.get(api, {crossdomain: true});
            return result.data;
        } catch (e) {
            throw e;
        }
    }
}

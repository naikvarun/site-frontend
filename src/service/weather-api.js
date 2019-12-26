const axios = require('axios');
const {config} = require('../config');
function buildURL(latitude, longitude) {
    return `${config.WEATHER_API_URL}/${latitude},${longitude}`;
}

module.exports = {
    getWeather: async (latitude, longitude) => {
        let api = buildURL(latitude, longitude);
        const result = await axios.get(api, { crossdomain: true });
        return result.data;
    }
};
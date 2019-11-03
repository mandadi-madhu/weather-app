const getGeoCodes = require('./utils/geoCode');
const getForecast = require('./utils/forecast');

getGeoCodes('London', (error, geoData) => {
    if (error) {
        return console.log(error);
    } else {
        getForecast(geoData.lattitude, geoData.langitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            } else {
                console.log(geoData.placeName);
                console.log(forecastData);
            }
        });
    }
});

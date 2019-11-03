const getGeoCodes = require('./utils/geoCode');
const getForecast = require('./utils/forecast');

getGeoCodes('London', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

getForecast('51.50722', '-0.1275', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

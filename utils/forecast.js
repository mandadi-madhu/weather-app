const request = require('request');

const getForecast = (lattitude, langitude, callback) => {
    const darkSkyUrl = 'https://api.darksky.net/forecast/3e015c1a66447546e7f9e36ef3d25a22/' + lattitude + ',' + langitude;

    request({ url: darkSkyUrl, json: true }, (error, response) => {
        if (error) {
            callback('server error', undefined);
        } else if (response.body.error) {
            callback('Cannot find weather for this location', langitude);
        } else {
            const currTemp = `Current temperature here is ${response.body.currently.temperature}`;
            callback(currTemp);
        }
    });
}

module.exports = getForecast;

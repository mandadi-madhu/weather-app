const request = require('request');
const getGeoCodes = require('./utils/geoCode');

const darkSkyUrl = "https://api.darksky.net/forecast/3e015c1a66447546e7f9e36ef3d25a22/37.8267,-122.4233";

request({ url: darkSkyUrl, json: true }, (error, response) => {
    if (error) {
        console.log('server error');
    } else if (response.body.error) {
        console.log('Cannot find weather for this location');
    } else {
        const currTemp = `Current temperature here is ${response.body.currently.temperature}`;
        console.log(currTemp);
    }
});

getGeoCodes('London', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

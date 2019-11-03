const request = require('request');

const darkSkyUrl = "https://api.darksky.net/forecast/3e015c1a66447546e7f9e36ef3d25a22/37.8267,-122.4233";

request({ url: darkSkyUrl, json: true}, (error, response) => {
    const currTemp = `Current temperature here is ${response.body.currently.temperature}`;
    console.log(currTemp);
});

// Geo location finder
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFkaHUtcmFvIiwiYSI6ImNrMml2eDB2cjBqdHIzaG9lamYyamMxdXUifQ.iwECvXK8jJG1eQxb_aTlTw";

request({url: geoUrl, json: true}, (error, response) => {
    const center = response.body.features[0].center;
    const lattitude = center[1];
    const langitude = center[0];

    console.log(lattitude, langitude);
});

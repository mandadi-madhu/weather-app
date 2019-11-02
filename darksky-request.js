const request = require('request');

const darkSkyUrl = "https://api.darksky.net/forecast/3e015c1a66447546e7f9e36ef3d25a22/37.8267,-122.4233";

request({ url: darkSkyUrl}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data);
});

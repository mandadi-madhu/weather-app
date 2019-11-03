const request = require('request');

const getGeoCodes = (location, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(location) +
    '.json?access_token=pk.eyJ1IjoibWFkaHUtcmFvIiwiYSI6ImNrMml2eDB2cjBqdHIzaG9lamYyamMxdXUifQ.iwECvXK8jJG1eQxb_aTlTw';

    request({url: geoUrl, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to server', undefined);
        } else if (response.body.features.length === 0) {
            callback('Cannot find geo codes for this location', undefined);
        } else {
            const center = response.body.features[0].center;
            const lattitude = center[1];
            const langitude = center[0];
            const placeName = response.body.features[0].place_name;
    
            callback(undefined, {
                lattitude,
                langitude,
                placeName 
            });
        }
    });
}

module.exports = getGeoCodes;

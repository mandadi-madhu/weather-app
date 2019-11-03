const getGeoCodes = (callback) => {
    setTimeout(() => {
        const geoCodes = {
            lattitude: 0,
            langitude: 0
        };
        callback(geoCodes);
    }, 2000);
}

getGeoCodes((data) => {
    console.log(data);
});

console.log('finished');

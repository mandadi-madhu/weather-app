const express = require('express');
// const path = require('path');

// const publicFolderPath = path.join(__dirname, '../public');

const app = express();
// app.use(express.static(publicFolderPath));

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Me'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        author: 'Madhu'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is help text'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

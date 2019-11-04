const express = require('express');

const app = express();

app.get('/data', (req, res) => {
    res.send({
        name: 'madhu',
        type: 'fun'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const express = require('express');
const path = require('path');

const publicFolderPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicFolderPath));

app.get('/data', (req, res) => {
    res.send({
        name: 'madhu',
        type: 'fun'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

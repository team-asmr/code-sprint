const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('*', (req,res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});
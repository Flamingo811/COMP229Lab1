// Author: KaWah Lau - 301255100
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello World')
});

app.get('/student', (req, res) =>{
    res.send('Hello Student')
});

app.get('/contact', (req, res) =>{
    res.send('My contact details are')
});

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})

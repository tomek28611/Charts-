const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();


// fs.readFile('./client/public/text.txt', 'utf-8', (err, text) => {
//     if (err) throw err;
//     console.log(text);
    
//   });

const text = ""


var qs = require('qs');
var data = qs.stringify({
    'extractors': 'entities',
    'text': 'Spains and Czech Republic, Prague stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways, Barack Obama and Iberia, Prague, Spains,Barack Obama, Prague'
});
var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.textrazor.com/',
    headers: {
        'x-textrazor-key': 'da9b3057abc7c42d72eee663b74b5f6a97dcc4fb1e13bad5602361f1',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
}

app.get('/data', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);


    axios(config)
        .then(response => {
            const data = response.data;
            res.send(data);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});
 
app.listen(5000, () => {
    console.log('Server listening on port 5000');
});
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// importing aylien API //
var aylien = require("aylien_textapi");
// adding system variables - API credentials //
const dotenv = require('dotenv');







// API credentials //
const apiEndpoint = 'https://api.aylien.com/api/v1';

dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });

// communicating with Aylien API for Summarize //
function getSummarizeFromAylien(url, res) {
    textapi.summarize({url:url}, function(error, response) {
        if (error === null) {
            // res.setHeader('Content-Type', 'application/json');
            res.send(response);
            console.log('++++++++++++++++++++++++');
            console.log(JSON.stringify(response));
            console.log('+++++++++++++++++++++++++++');
        } else {
            console.log(error);
            return null;
        }
    });
}
  

const app = express()

// Enablig cors //
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//summarize URL //
app.get('/summarize', function (req, res) {
    const url = req.query.url;
    getSummarizeFromAylien(url, res);
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})



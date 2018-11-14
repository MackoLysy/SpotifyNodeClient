const express = require('express');
var request = require('request');
var querystring = require('querystring');

/* "build": "node_modules/.bin/webpack && webpack-dev-server --content-base public/ --inline --hot --port 5000" */
const app = express();
var clientId = '5db82526bd1a4a5180aaddd2971f0b11'; // Your client id
var clientSecret = '7d64d9d350f14c318bbd5d255f42b1c2'; // Your secret
var redirectUri = 'http://localhost:3000/callback'; // Your redirect uri
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken("5db82526bd1a4a5180aaddd2971f0b11");
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log("Server works on 3000");
});

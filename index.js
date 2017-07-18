
'use strict';

cconst express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const mysql = require('mysql');
const app = express();
var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12184383",
  password: "Pqay5FrA7Z",
	dat

app.use(bodyParser.urlencoded({
    extended: true
}));



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});


app.use(bodyParser.json());


restService.post('/webhook', function(req, res) {
    
    var data = req.body;
 	var event =messaging_events[i]
	var sender = event.sender.id


var speech="work";
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'Act_Heating_Bulb_Off'
    });
});





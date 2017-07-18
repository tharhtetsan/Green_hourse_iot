'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/Action', function(req, res) {
    var data = req.body;
 	var event =messaging_events[i]
	var sender = event.sender.id


var speech=data+"\t"+event+"\t"+sender;
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});



restService.use(bodyParser.json());

restService.post('/Action', function(req, res) {

    var Action_Name=req.body.result;

                     var sql = "";
                      var speech=eq.body.result+"\t____";
    
    
       return res.json({
              speech: speech,
              displayText: speech,
              source: 'webhook-echo-sample'
               });

           

});





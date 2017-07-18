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
                      var speech=req.body.result+"\t___"

                 if(Action_Name=="Act Heating Bulb Off")
                 {
                  sql="Update action_tb set act_1_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act Heating Bulb On")
                 {
                  sql="Update action_tb set act_1_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act Humidity Off")
                 {
                    sql="Update action_tb set act_2_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act Humidity On")
                 {
                    sql="Update action_tb set act_2_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act Sheet Off")
                 {
                    sql="Update action_tb set act_3_status=0 where Mid='ths';";
                }
                 else if(Action_Name=="Act Sheet On")
                 {
                    sql="Update action_tb set act_3_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act Watering Off")
                 {
                    sql="Update action_tb set act_4_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act Watering On")
                 {
                    sql="Update action_tb set act_4_status=1 where Mid='ths';";
                 }



            if(sql=="")
            {

               return res.json({
              speech: speech,
              displayText: speech,
              source: 'webhook-echo-sample'
               });
           }

    speech=sql+"";
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });

           

});





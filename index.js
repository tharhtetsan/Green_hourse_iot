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
                      var speech=""

                 if(Action_Name=="Act_Heating_Bulb_Off")
                 {
                  sql="Update action_tb set act_1_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act_Heating_Bulb_On")
                 {
                  sql="Update action_tb set act_1_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act_Humidity_Off")
                 {
                    sql="Update action_tb set act_2_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act_Humidity_On")
                 {
                    sql="Update action_tb set act_2_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act_Sheet_Off")
                 {
                    sql="Update action_tb set act_3_status=0 where Mid='ths';";
                }
                 else if(Action_Name=="Act_Sheet_On")
                 {
                    sql="Update action_tb set act_3_status=1 where Mid='ths';";
                
                 }
                 else if(Action_Name=="Act_Watering_Off")
                 {
                    sql="Update action_tb set act_4_status=0 where Mid='ths';";
                 }
                 else if(Action_Name=="Act_Watering_On")
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





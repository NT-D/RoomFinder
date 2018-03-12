const express = require('express');
const bodyParser = require('body-parser');
const DialogflowApp = require('actions-on-google').DialogflowApp;


const app = express();
app.use(bodyParser.json());

app.post('/gghome',(req,res)=>{
    console.log(JSON.stringify(req.body));
    
    const dialogApp = new DialogflowApp({
        request : req,
        response : res
    });
    dialogApp.tell("やりがいあるなぁ～");
    dialogApp.tell("ゴソゴソ...確保完了です！");
});

app.listen(process.env.PORT || 8080);
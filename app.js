const express = require('express');
const bodyParser = require('body-parser');
const DialogflowApp = require('actions-on-google').DialogflowApp;

const bookRoomActionName = 'reserve.room';

const expressApp = express();
expressApp.use(bodyParser.json());

expressApp.post('/gghome',(req,res)=>{
    console.log(JSON.stringify(req.body));
    
    const dialogApp = new DialogflowApp({
        request : req,
        response : res
    });

    function bookRoom(){
        dialogApp.ask("確保しました！");
    }
    
    function communication(){
        dialogApp.tell("テスト");
    }

    let actionMap = new Map();
    actionMap.set(bookRoomActionName,bookRoom);

    dialogApp.handleRequest(actionMap);
});


expressApp.listen(process.env.PORT || 8080);
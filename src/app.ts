import express from 'express';
import bodyParser from 'body-parser';
import { DialogflowApp } from 'actions-on-google';
import { getUserInfo, reserveRoom } from './msgraphService';

const bookRoomActionName = 'reserve.room';

const expressApp = express();
expressApp.use(bodyParser.json());

expressApp.post('/gghome', (req, res) => {
    // console.log(JSON.stringify(req.body));

    const dialogApp = new DialogflowApp({
        request: req,
        response: res
    });

    function bookRoom() {
        // console.log(`Access Token:${dialogApp.getUser().accessToken}`);
        getUserInfo(dialogApp.getUser().accessToken)
        .then(result => {
            console.log(result.surname);
            dialogApp.ask("テスト");
        });
        dialogApp.ask("確保しました！");
    }

    function communication() {
        getUserInfo(dialogApp.getUser().accessToken)
            .then(result => {
                console.log(result.surname);
                dialogApp.ask("テスト");
            });
    }

    let actionMap = new Map();
    actionMap.set(bookRoomActionName, bookRoom);

    dialogApp.handleRequest(actionMap);
});


expressApp.listen(process.env.PORT || 8080);
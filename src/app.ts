import express from 'express';
import bodyParser from 'body-parser';
import { DialogflowApp } from 'actions-on-google';
import { getUserInfo, reserveRoom } from './msgraphService';
import msGraph from '@microsoft/microsoft-graph-types';

const bookRoomActionName = 'reserve.room';
const communicationName = 'communication';

const expressApp = express();
expressApp.use(bodyParser.json());

expressApp.post('/gghome', (req, res) => {
    const dialogApp = new DialogflowApp({
        request: req,
        response: res
    });

    function bookRoom() {
        reserveRoom(dialogApp.getUser().accessToken)
            .then(result => {
                console.log(result);
                if (result.location && result.location.displayName) dialogApp.ask(`${result.location.displayName}を1時間確保しました！`);
                dialogApp.ask("確保しました！");
            })
            .catch(err => {
                console.log(err);
                dialogApp.ask("Error発生！ちゃんとハンドルしよう");
            });
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
    actionMap.set(communicationName,communication);
    dialogApp.handleRequest(actionMap);
});

expressApp.listen(process.env.PORT || 8080);
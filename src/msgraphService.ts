import fetch from 'node-fetch';
import msGraph from '@microsoft/microsoft-graph-types';

const apiEndpointUrl: string = 'https://graph.microsoft.com/v1.0/';
const timezone: string = 'Tokyo Standard Time';
const meetingRoomLists: string[] = ['meetingroom1@sample.com', 'meetingroom2@sample.com'];

export async function reserveRoom(accessToken: string): Promise<msGraph.Event> {
    //Set Date
    const start: Date = new Date();
    start.setHours(start.getHours() + 9);//TODO; set appropriate timezone value (Now I set +9 for Japan demo)
    let startTime: string = start.toISOString();
    startTime = startTime.substring(0, startTime.indexOf("."));
    start.setHours(start.getHours() + 1);
    let endTime: string = start.toISOString();
    endTime = endTime.substring(0, endTime.indexOf("."));

    //Create header
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`, 'Prefer': `outlook.timezone="${timezone}"` };

    //Construct body
    let meetingInfo: msGraph.Event = {
        subject: "Casual meeting booked by Google Home",
        start: { dateTime: startTime, timeZone: timezone },
        end: { dateTime: endTime, timeZone: timezone },
        location: { locationEmailAddress: meetingRoomLists[1],displayName:"19F meeting room" },
        attendees: [{ emailAddress: { address: meetingRoomLists[1] }, type: "resource" }],
        body: { content: "Reserved by Google Home and Masayuki Ota" }
    };

    //Send request
    const response = await fetch(`${apiEndpointUrl}/me/calendar/events`, { method: "POST", headers: headers, body: JSON.stringify(meetingInfo) });
    return await response.json() as msGraph.Event;
}

async function getRoomStatus(roomAlias: string): Promise<boolean> {
    let status = false;
    //TODO:Will implement
    return status;
}

export async function getUserInfo(accessToken: string): Promise<msGraph.User> {
    const response = await fetch(`${apiEndpointUrl}/me`, { method: 'GET', headers: { 'Authorization': `Bearer ${accessToken}` } });
    return await response.json() as msGraph.User;
}
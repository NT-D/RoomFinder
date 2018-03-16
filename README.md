# RoomFinder
This is demo project for booking meeting room in Office 365 Tenant by Google Assistant (Home).

## What you can learn
- How to setup OAuth authentication for [Microsoft Graph](https://developer.microsoft.com/en-us/graph) in [Dialog Flow](https://dialogflow.com/)
- How to book meeting room through Microsoft Graph

## Current version limitation
- Haven't implemented the function to find available room in room list. You can implement it with following 2 APIs.
    1. Get meeting rooms with [findRoomLists API](https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/user_findroomlists) and [findRooms API](https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/user_findrooms).
    2. Find available foom with [findMeetingTimes API](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_findmeetingtimes) or [List events API](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_list_events)
- No test.. sorry

# Solution description
## Current Architecture
![architecture](./img/architecture.png)

## Prerequisites
- Install [Node.js](https://nodejs.org/en/) in your development environment
- Basic TypeScript knowledge. Please learn from [tutorial document](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## How to run
1. `git clone https://github.com/NT-D/RoomFinder.git`
2. `npm install` in terminal(or command prompt) for installing node modules
3. `npm run watch` in another terminal for trans-complie .ts to .js file
4. `npm run start` in terminal for starting app.
5. Setup [ngrok](https://ngrok.com/) and create forwarding url (ex. You will get the url like https://c349cad0.ngrok.io)
6. [Set previous url in the Fulfillment settings](https://dialogflow.com/docs/getting-started/basic-fulfillment-conversation#enable_webhook_in_dialogflow) in dialog flow.


## Implementation steps
### Register app in Microsoft App registration portal

### Setup Dialog flow (Basic)

### Setup Dialog flow (Authentication)

### Call MS Graph by app

# Userful resources
- [Samples and Libraries for Actions on Google](https://github.com/actions-on-google)
- [Account link]()
- [App registration portal](https://apps.dev.microsoft.com/)
- [
Get started with Microsoft Graph in a Node.js app](https://developer.microsoft.com/en-us/graph/docs/concepts/nodejs)
- [MS Graph Types](https://github.com/microsoftgraph/msgraph-typescript-typings)
- [Time zone lists](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones)
- [Get started with Microsoft Graph in a Node.js app](https://developer.microsoft.com/en-us/graph/docs/concepts/nodejs)
- [Create Event in MS Graph](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_post_events#request-headers)
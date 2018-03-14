import fetch from 'node-fetch';

const apiEndpointUrl = 'https://graph.microsoft.com/v1.0/';

export async function reserveRoom(accessToken:string){
    // const response = fetch()
}

export async function getUserInfo(accessToken:string){
    const response = await fetch(`${apiEndpointUrl}/me`,{method:'GET',headers:{'Authorization': `Bearer ${accessToken}`}});
    return await response.json();
}



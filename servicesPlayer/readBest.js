import fetch from 'node-fetch';
import { GetCookie } from "../login/login.js";


export async function GetResultPlayer(name, url) {
    try {

        const cookieHeader = await GetCookie();

        const response = await fetch(`http://localhost:3000/${url}/${name}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'authorization': cookieHeader
            },

        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            console.log(data.messege);
            return [];
        }

    } catch (err) {
        console.error("invalid error:", err);
        return [];
    }
}

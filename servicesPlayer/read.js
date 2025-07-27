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

        if (!response.ok) {
            console.log(response.status);
            return [];
        }

        const data = await response.json();

        console.log(` Data received:`, data);
        return data;

    } catch (err) {
        console.error("invalid error:", err);
        return [];
    }
}

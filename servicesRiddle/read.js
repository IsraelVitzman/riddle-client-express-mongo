import fetch from 'node-fetch';
import { GetCookie } from "../login/login.js";


export async function Read(url) {
    try {

        const cookieHeader = await GetCookie();

        const response = await fetch(`http://localhost:3000/${url}`, {
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

       
        return data;

    } catch (err) {
        console.error("invalid error:", err);
        return [];
    }
}

import fetch from 'node-fetch';
import { GetCookie } from "../login/login.js";

export async function Create(data, url) {
    try {
        const cookieHeader = await GetCookie();
        const response = await fetch(`http://localhost:3000/${url}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'authorization': cookieHeader
            },
            body: JSON.stringify(data)
        });


        const result =await response.json()
        console.log(result.message);
            


    } catch (err) {
        console.error("❌ Request error:", err);
        return null;
    }
}
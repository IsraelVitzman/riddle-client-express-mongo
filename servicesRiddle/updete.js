import fetch from 'node-fetch';
import { GetCookie } from "../login/login.js";

export async function Update(id, updatedRiddle) {

    try {
        const cookieHeader = await GetCookie();
        const response = await fetch(`http://localhost:3000/riddles/updateRiddle/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': cookieHeader
            },
            body: JSON.stringify(updatedRiddle)
        });
        
        
        const result =await response.json()
        console.log(result);

    } catch (err) {
        console.log("invalid eroor:", err);
    }
}

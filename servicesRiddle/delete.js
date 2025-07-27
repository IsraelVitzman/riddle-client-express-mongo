import fetch from 'node-fetch';
import { GetCookie } from "../login/login.js";

export async function Delate(id) {
    try {
        const cookieHeader = await GetCookie();
        const response = await fetch(`http://localhost:3000/riddles/deleteRiddle${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': cookieHeader
            }
        })
        
        const result =await response.json()
        console.log(result.message);
            
        

    } catch (err) {
        console.log("invalid eroor :", err);

    }

}

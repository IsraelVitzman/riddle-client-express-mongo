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
        if (response.ok) {
            console.log("seccosssoflly deleted.. ");

        } else {
            console.log(response.status);
        }

    } catch (err) {
        console.log("invalid eroor :", err);

    }

}

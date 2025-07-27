import { CreateToken } from '../servicesToken/createToken.js';
import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';

let coccay = null;

export async function login(name) {
    try {
        const response = await CreateToken({ "name": name, "role": "user" }, 'player/login');
        if (response) {

            await writeFile("token.txt", JSON.stringify(response, null, 2));
        } else {
            console.log("invalid error: you have no token");
        }
    } catch (err) {
        console.log("invalid error:", err);
    }
}


export async function GetCookie() {
    try {

        const data = await readFile("token.txt", 'utf-8');
        coccay = JSON.parse(data);
        return coccay;
    } catch (err) {
        console.log("No token available - please login first");
        return null;
    }
}


import fetch from 'node-fetch';

export async function Read(url) {
    try {
        const response = await fetch(`http://localhost:3000/${url}`)

        const data = await response.json();


        if (!data) {
            return "is null"
        }
        return data;

    } catch (err) {
        console.error('invalid eroor:', err);
        return []
    }
}

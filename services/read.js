
import fetch from 'node-fetch';

export async function Read() {
    try {
        const response = await fetch('https://riddle-express-mongo.onrender.com/getAllRidlles')

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
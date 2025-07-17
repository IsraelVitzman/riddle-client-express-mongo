
import fetch from 'node-fetch';

export async function Read() {
    try {
        const response = await fetch('https://new-project-riddle-with-server.onrender.com/read')

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
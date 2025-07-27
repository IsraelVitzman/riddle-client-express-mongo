import fetch from 'node-fetch';


export async function CreateToken(data, url) {
    try {

        const response = await fetch(`http://localhost:3000/${url}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        });


        if (!response.ok) {
            console.log("status", response.status);
            return null;
        }


        const d = await response.json()
        console.log(d);

        return d.token

    } catch (err) {
        console.error("❌ Request error:", err);
        return null;
    }
}
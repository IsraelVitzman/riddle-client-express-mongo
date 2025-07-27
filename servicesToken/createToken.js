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

        const result = await response.json()
        if (response.ok) {
            return result.token
        }
        else{
           console.log(result.messege);
        } 

    } catch (err) {
        console.error("❌ Request error:", err);
        return null;
    }
}
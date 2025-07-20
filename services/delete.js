import fetch from 'node-fetch';

export async function Delate(id) {
    try {
        const response = await fetch(`http://localhost:3000/riddles/deleteRiddle${id}`, {
            method: 'DELETE'
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

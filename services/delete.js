import fetch from 'node-fetch';

export async function delate(id) {
    try {
        const response = await fetch(`https://riddle-express-mongo.onrender.com/deleteRiddle/${id}`, {
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

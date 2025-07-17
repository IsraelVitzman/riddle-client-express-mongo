import fetch from 'node-fetch';

export async function delate(id) {
    try {
        const response = await fetch(`https://new-project-riddle-with-server.onrender.com/delete/${id}`, {
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

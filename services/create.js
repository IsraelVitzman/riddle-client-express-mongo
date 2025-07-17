export async function Create(riddle, url) {
    try {
        const reqoest = await fetch(`https://new-project-riddle-with-server.onrender.com/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(riddle)

        })
        if (reqoest.ok) {
            console.log("seccossflly added to  server.");
        }
        else {
            console.log("eroor", reqoest.status);

        }

    } catch (err) {
        console.log("invalid eroor : no added to server", err);
    }

}
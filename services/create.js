export async function Create(riddle, url) {
    try {
        const reqoest = await fetch(`http://localhost:3000${url}`, {
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
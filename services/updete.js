export async function Update(id, updatedRiddle) {
    try {
        const response = await fetch(`http://localhost:3000/riddles/updateRiddle/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRiddle)
        });

        if (response.ok) {
            console.log(" Riddle updated successfully");
        } else {
            console.log(response.status);
        }

    } catch (err) {
        console.log("invalid eroor:", err);
    }
}

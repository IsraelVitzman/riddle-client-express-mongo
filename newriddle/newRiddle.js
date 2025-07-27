import { Create } from "../servicesRiddle/create.js";
import { } from "../login/login.js";
export async function NewRiddle(id, name, hint, question, answer) {

    const newRiddlle = {
        "id": id,
        "name": name,
        "hint": hint,
        "question": question,
        "answer": answer,
    }
    await Create(newRiddlle, 'riddles/addRiddle')
}

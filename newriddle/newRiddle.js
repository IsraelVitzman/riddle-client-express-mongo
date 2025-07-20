import { Create } from "../services/create.js";

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

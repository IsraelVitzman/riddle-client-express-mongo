import { Create } from '../services/create.js'
import { Read } from '../services/read.js'

export async function CheakPlayer(name) {

    const data = await Read()
    console.log(" i am cheak if is found...");

    for (var player of data) {
        if (name === player) {
            return "it's found"
        }
    }
    console.log("no found! create new.");

    await Create(name, '/CheakPlayer')
}
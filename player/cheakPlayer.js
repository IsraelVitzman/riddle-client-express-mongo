import { Create } from '../services/create.js'
import { Read } from '../services/read.js'

export async function CheakPlayer(name) {


    const data = await Read("player/getAllNamePlayers")
    console.log(" i am cheak if is found...");


    for (var namePlayer of data) {
        if (name === namePlayer.name) {
            return "it's found"
        }
    }
    console.log("no found! create new.");

    await Create({"name": name },'player/newPlayer')
}




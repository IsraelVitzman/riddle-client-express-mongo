import { Read } from "../services/read.js";
import { Riddles } from "../logikGame/riddleFlow.js";
import { CheakPlayer } from "../player/cheakPlayer.js";
import { ResultGame } from "../player/resultGemePlayer.js";

import readlineSync from 'readline-sync';
import { log } from "node:console";

export async function ManegerGame() {
    console.log("welcome!!");
    try {
        const name = readlineSync.question("What is your name? ");
        await CheakPlayer(name)


        const allRiddles = await Read("riddles/getAllRiddles")


        await Riddles(allRiddles)

        await ResultGame(name)



    } catch (err) {
        console.error(err);
    }


}
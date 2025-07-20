import { Read } from "../services/read.js";
import { Riddles } from "../logikGame/riddleFlow.js";
import { CheakPlayer } from "../player/cheakPlayer.js";
import { ResultGame } from "../player/resultGemePlayer.js";

import readlineSync from 'readline-sync';

export async function ManegerGame() {
    console.log("welcome!!");

    const name = readlineSync.question("What is your name? ");
    CheakPlayer(name)


    const allRiddles = await Read()
    await Riddles(allRiddles)

    await ResultGame(name)

}
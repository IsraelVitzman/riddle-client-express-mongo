import { Read } from "../services/read.js";
import { Riddles } from "./riddleFlow.js";
import { ResultGame } from "../player/resultGemePlayer.js";
import { login } from "../login/login.js";
import readlineSync from 'readline-sync';


export async function ManegerGame() {
    console.log("welcome!!");
    try {
        const name = readlineSync.question("What is your name? ");

        await login(name)


        const allRiddles = await Read("riddles/getAllRiddles")


        await Riddles(allRiddles)

        await ResultGame(name)



    } catch (err) {
        console.error(err);
    }


}
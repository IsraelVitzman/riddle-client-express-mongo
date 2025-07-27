import { Read } from "../servicesRiddle/read.js";
import { Riddles } from "./riddleFlow.js";
import { ResultGame } from "../player/resultGemePlayer.js";



export async function ManegerGame(name) {
    console.log("welcome!!");
    try {
        const allRiddles = await Read('riddles/getAllRiddlesToGame')
        await Riddles(allRiddles)
        await ResultGame(name)
    } catch (err) {
        console.error(err);
    }


}
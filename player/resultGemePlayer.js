import { Create } from '../servicesRiddle/create.js';
import { Player } from "./newPlayer.js";
import { getTimeForAllRidders, getSecondsForQuestion } from "../utils/manegerTime.js";

export async function ResultGame(name) {
    const avergeTime = getSecondsForQuestion();
    const allTime = getTimeForAllRidders();

    console.log("name", name, "avergetime", avergeTime, "alltime", allTime);


    const result = await Create(Player(name, avergeTime, allTime), 'resultGame/dataPlayer');

    if (result) {
        console.log("Game result saved successfully");
    } else {
        console.log("Failed to save game result");
    }
}

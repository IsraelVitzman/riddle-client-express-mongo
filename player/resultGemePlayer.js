import { Create } from '../services/create.js'
import { Player } from "./newPlayer.js";
import { getTimeForAllRidders, getSecondsForQuestion } from "../utils/manegerTime.js";

export async function ResultGame(name) {

    const avergeTime = getSecondsForQuestion()
    const allTime = getTimeForAllRidders()
    console.log("name", name, "avergeTime", avergeTime, "allTime", allTime);

    await Create(Player(name, avergeTime, allTime), 'resultGame/dataPlayer')
}
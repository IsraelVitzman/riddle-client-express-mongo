import { Create } from '../services/create.js'
import { Player } from "./newPlayer.js";
import { getTimeForAllRidders, getSecondsForQuestion } from "../utils/manegerTime.js";

export function ResultGame(name) {

    const avergeTime = getSecondsForQuestion()
    const allTime = getTimeForAllRidders()

    Create(Player(name, avergeTime, allTime), '/dataPlayer')
}
import { Questions } from "../logikGame/logikQuestions.js";
import { time, addTimeForAllRidders, addSecondsForQuestion, returnTime } from "../utils/manegerTime.js";

export async function Riddles(riddles) {
    const startTime = time();
    for (const riddle of riddles) {
        await Riddle(riddle);
    }
    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}

export async function Riddle(riddle) {
    const startTime = time();
    await Questions(riddle)
    const endAskTime = time();
    addSecondsForQuestion(returnTime(startTime, endAskTime));
}

import readlineSync from 'readline-sync';

export async function Questions(ridder) {
    let answer = null;

    console.log(`Riddle ID: ${ridder.id}`);
    console.log(`Riddle Name: ${ridder.name}`);

    do {
        console.log(`Question: ${ridder.question}`);
        answer = readlineSync.question("What is your answer? if you want hint write hint: ");

        if (answer.toLowerCase() === "hint") {
            console.log(`Hint: ${ridder.hint}`);

        }

        if (answer.toLowerCase() !== ridder.answer.toLowerCase()) {
            console.log("This is a mistake... try again");
            console.log("-------------------------");
        }
    } while (answer.toLowerCase() !== ridder.answer.toLowerCase());

    console.log("Good answer!");
}
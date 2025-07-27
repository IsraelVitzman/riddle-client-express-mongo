import { ManegerGame } from "../logikGame/controlessGame.js";
import { NewRiddle } from "../newriddle/newRiddle.js";
import { Read } from "../servicesRiddle/read.js";
import { GetResultPlayer } from "../servicesPlayer/readBest.js";
import { Delate } from "../servicesRiddle/delete.js";
import { Update } from "../servicesRiddle/updete.js";
import readlineSync from 'readline-sync';
import { login } from "../login/login.js";

export async function showMainMenu() {
    console.log("Welcome to game riddle");
    const register = readlineSync.question("if you user or wont to register enter 1 else enter sumting");

    if (register === '1') {
        const newUser = readlineSync.question("What is your name? ");
        const password = readlineSync.question("What is your password? ");
        await login(newUser, password);

    }

    while (true) {
        console.log(`
==========================
✨ Main Menu ✨
1. Play the game
2. Create a new riddle
3. Show all riddles
4. Delete riddle by id
5. Update a riddle
6. Show best on player
7. Show best all players
==========================
`);

        const choice = readlineSync.question('Choose an action (1-9): ');
        switch (choice) {

            case '1':
                const nameUser = readlineSync.question("What is your name? ");
                await ManegerGame(nameUser);
                break;

            case '2':
                const id = readlineSync.question('Enter ID: ');
                const name = readlineSync.question('Enter riddle name: ');
                const hint = readlineSync.question('Enter hint: ');
                const question = readlineSync.question('Enter the question: ');
                const answer = readlineSync.question('Enter the answer: ');
                await NewRiddle(id, name, hint, question, answer);
                break;

            case '3':
                const riddles = await Read("riddles/getAllRiddles");
                console.log(riddles);
                break;



            case '4':
                const idDelete = readlineSync.question('Enter riddle ID to delete: ');
                await Delate(idDelete);
                break;




            case '5':
                const updateId = readlineSync.question('Enter riddle ID to update: ');
                const newName = readlineSync.question('New name: ');
                const newHint = readlineSync.question('New hint: ');
                const newQuestion = readlineSync.question('New question: ');
                const newAnswer = readlineSync.question('New answer: ');

                await Update(updateId, {
                    name: newName,
                    hint: newHint,
                    question: newQuestion,
                    answer: newAnswer
                });
                break;

            case '6':
                const User = readlineSync.question("What is your name? ");
                const results = await GetResultPlayer(User, "resultGame/resultBestPlayer");
                console.log(results);
                break;


            case '7':
                const result = await Read("resultGame/resultBestAllPlayers");
                console.log(result);
                break;



            default:
                console.log('⚠️ Invalid choice. Try again.');
                break;
        }
    }
}
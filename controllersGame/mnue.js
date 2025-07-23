import { ManegerGame } from "../logikGame/controlessGame.js";
import { NewRiddle } from "../newriddle/newRiddle.js";
import { Read } from "../services/read.js";
import { Delate } from "../services/delete.js";
import readlineSync from 'readline-sync';


export async function showMainMenu() {
    while (true) {
               console.log(`
==========================
✨ Main Menu ✨
1. Play the game
2. Create a new riddle
3. Show all riddles
4. Show all players
5. Show all best results
6. Delete riddle by id
7. Login player
8. Show best result of one player
9. Update a riddle
==========================
`);

        const choice = readlineSync.question('Choose an action (1-9): ');
        switch (choice) {
            case '1':
                await ManegerGame();
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

            

            case '5':
                const results = await Read("resultGame/resultBestAllPlayers");
                console.log(results);
                break;

            case '6':
                const idDelete = readlineSync.question('Enter riddle ID to delete: ');
                await Delate(idDelete);
                break;

            

            case '8':
                const nameSearch = readlineSync.question('Enter player name: ');
                await GetBestResultByPlayer(nameSearch);
                break;

            case '9':
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

            default:
                console.log('⚠️ Invalid choice. Try again.');
                break;
        }

    }
}

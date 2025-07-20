import { ManegerGame } from "./controlessGame.js";
import { NewRiddle } from "../newriddle/newRiddle.js";
import { Read } from "../services/read.js";
import readlineSync from 'readline-sync';


export async function showMainMenu() {
    while (true) {
        console.log(`
==========================
✨ Main Menu ✨
1. Play the game
2. Create a new riddle
3. Show all riddles
4. Update a riddle by ID
5. Delete a riddle by ID
==========================
    `);

        const choice = readlineSync.question('Choose an action (1-5): ');

        try {
            switch (choice) {
                case '1':
                    console.log('🎮 Starting the game...');
                    await ManegerGame()


                    break;

                case '2':
                    console.log('📝 Creating a new riddle...');
                    const id = readlineSync.question('Enter ID: ');
                    const name = readlineSync.question('Enter riddle name: ');
                    const hint = readlineSync.question('Enter hint: ');
                    const question = readlineSync.question('Enter the question: ');
                    const answer = readlineSync.question('Enter the answer: ');

                    await NewRiddle(id, name, hint, question, answer)

                    break;

                case '3':
                    console.log('📜 Showing all riddles...');
                    const data = await Read()
                    console.log(data);

                    break;

                case '4':
                    console.log('✏️ Updating riddle by ID...');

                    break;

                case '5':
                    console.log('🗑️ Deleting riddle by ID...');
                    const DeleteById = readlineSync.question('Enter ID: if you wont to delete all enter (all)');
                    await delate(DeleteById)
                    break;

                default:
                    console.log('⚠️ Invalid choice. Please try again.');
                    break;
            }
        } catch (error) {
            console.error("Error in menu operation:", error);
        }
    }
}

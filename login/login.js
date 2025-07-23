import { Create } from '../services/create.js'

export async function login(name) {
    try {
        await Create({ "name": name }, 'player/login')
    } catch (err) {
        console.log("invalid error", err);

    }

}


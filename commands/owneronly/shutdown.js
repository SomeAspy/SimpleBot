import { client } from "../../index.js";
export const name = 'shutdown';
export let ownerOnly=true
export async function execute(message){
    await message.channel.send('Goodbye.').then(client.destroy())
}
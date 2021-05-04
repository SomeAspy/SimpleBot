import { client } from "../../cmdHandler.js";

const owner=process.env.OWNER;
export const name = 'shutdown';
export function execute(message) {
    if (message.author.id === owner) {
        message.reply('Stopping!');
        client.destroy()
    } else {
        return (message.reply('only the owner of the bot can do this!\nIf you cloned the bot remember to put your ID in the owner variable of your .env file!'));
    }
}
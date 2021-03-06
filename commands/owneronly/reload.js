const owner=process.env.OWNER;
import { readdirSync } from 'fs';
export const name = 'reload';
export const description = 'reload a command';
export const args = true;
export function execute(message, args) {
    if (message.author.id === owner) {
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command)
            return message.channel.send('There is no command matching that name to reload');
        const commandFolders = readdirSync('./commands');
        const folderName = commandFolders.find(folder => readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));
        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error reloading the command! ${error.message}`);
        }
    } else { return (message.reply('only the owner of the bot can do this!\nIf you cloned the bot remember to put your ID in the owner variable of your .env file!')); }
}
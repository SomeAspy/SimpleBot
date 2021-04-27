import { prefix } from './index.js'
export const name = "help";
export const description = "How to use the bot";
export const aliases = ['commands'];
export const usage = '[command name]';
export const cooldown = 5;
export function execute(message, args) {
    const data = [];
    const { commands } = message.client;
    if (!args.length) {
        data.push('Command List:');
        data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send\`${prefix}help [command name]\` to get info on a specific command`);
        return message.author.send(data, { split: true }).then(() => {
            if (message.channel.type === 'dm')
                return;
            message.reply('Check your DM for a list of commands!');
        }).catch(error => {
            console.error(`DM to ${message.author.tag} failed.\n`, error);
            message.reply('DM failed.');
        });
    }
    const commandName = args[0].toLowerCase();
    const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
        return message.channel.send('The command you requested help for does not exist!');
    }
    data.push(`**Name:** ${command.name}`);
    if (command.aliases)
        data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description)
        data.push(`**Description:** ${command.description}`);
    if (command.usage)
        data.push(`**Usage: ${prefix}${command.name} ${command.usage}`);
    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    message.channel.send(data, { split: true });
}
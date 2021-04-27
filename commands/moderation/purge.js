import { MessageEmbed } from 'discord.js';
import { randColor } from '../../library.js';
export const name = "purge";
export const description = "Purge x number of messages, (age is limited to 2 weeks duw to api)";
export const args = true;
export const usage = "<number of messages to delete>";
export const permissions = "MANAGE_MESSAGES";
export const guildOnly = true;
export const aliases=['prune']
export function execute(message, args) {
    let count=args[0]
    if(isNaN(count)){return message.reply('enter a valid number!')}
    message.channel.bulkDelete(count).then(messages=>count=messages.size)
    let embed = new MessageEmbed()
        .setTitle(`Deleted ${count} messages!`)
        .setColor(randColor())
        .setTimestamp();

    message.channel.send(embed);
}
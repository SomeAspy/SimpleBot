import { mentionToUser } from '../../library.js'
import { MessageEmbed } from 'discord.js';
export const name = "ban";
export const description = "Ban a member";
export const args = true;
export const usage = "<user>";
export const permissions = "BAN_MEMBERS";
export const guildOnly = true;
export function execute(message, args, client) {
    let user = mentionToUser(args[0], client);
    if (!user) { return message.reply('Invalid User!'); }
    message.guild.members.ban(user)
    let embed = new MessageEmbed()
        .setTitle(`Banned ${user.username}.`)
        .setColor('#ff0000')
        .setTimestamp();

    message.channel.send(embed);
}
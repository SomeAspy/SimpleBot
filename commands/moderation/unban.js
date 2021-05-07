import { mentionToUser } from '../../libraries/library.js'
import { MessageEmbed } from 'discord.js';
export const name = "unban";
export const description = "unban a member";
export const args = true;
export const usage = "<ID>";
export const permissions = "BAN_MEMBERS";
export const botPerms=['BAN_MEMBERS']
export const guildOnly = true;
export function execute(message, args) {
    let user = mentionToUser(args[0]);
    if (!user) { return message.reply('Invalid ID!'); }
    message.guild.members.unban(user)
    let embed = new MessageEmbed()
        .setTitle(`unbanned ${user.username}.`)
        .setColor('#2bff00')
        .setTimestamp();

    message.channel.send(embed);
}
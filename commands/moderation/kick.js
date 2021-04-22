import{secondArg}from'../../library.js'
import { MessageEmbed } from 'discord.js';
export const name = "kick";
export const description = "Kick a member";
export const args = true;
export const usage = "<user>";
export const permissions = "KICK_MEMBERS";
export const guildOnly = true;
export function execute(message, args, client) {
    let kickReason='(No reason given)'
    let user = client.lib.mentionToUser(args.shift(), client);
    if(!args.length===0){
        kickReason=secondArg(args)
    }
    if (!user) { return message.reply('Invalid User!'); }
    message.mentions.members.first().kick({reason:kickReason});
    let embed = new MessageEmbed()
        .setTitle(`Kicked ${user.username} with reason ${kickReason}.`)
        .setColor('#ff0000')
        .setTimestamp();

    message.channel.send(embed);
}
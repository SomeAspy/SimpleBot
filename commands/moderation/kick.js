import { MessageEmbed } from 'discord.js';
export const name = "kick";
export const description = "Kick a member";
export const args = true;
export const usage = "<user>";
export const permissions = "KICK_MEMBERS";
export const guildOnly = true;
export function execute(message, args, client) {
    let user = client.lib.mentionToUser(args[0], client);
    if (!user) { return message.reply('Invalid User!'); }
    message.mentions.members.first().kick();
    let embed = new MessageEmbed()
        .setTitle(`Kicked ${user.username}.`)
        .setColor('#ff0000')
        .setTimestamp();

    message.channel.send(embed);
}
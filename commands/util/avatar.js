  
import { MessageEmbed } from 'discord.js';
import { mentionToUser,randColor } from '../../library.js'
export const name = 'avatar';
export const description = 'Get the avatar of a user';
export const aliases = ['av', 'pfp', 'ava'];
export const cooldown = 5;
export function execute(message, args, client) {
    let user;
    if (args[0]) {
        user = mentionToUser(args[0], client);
        if (!user) { return message.reply('Invalid User!'); };
    } else { user = message.author; }
    const embed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar:`)
        .setColor(randColor())
        .setImage(user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    message.channel.send(embed);
}
import { mentionToUser } from '../../libraries/library.js'
import { MessageEmbed } from 'discord.js';
export const name = "ban";
export const description = "Ban a member";
export const args = true;
export const usage = "<user>";
export const permissions = "BAN_MEMBERS";
export const botPerms=['BAN_MEMBERS']
export const guildOnly = true;
export async function execute(message, args) {
    let embed
    let OK=true
    let user = mentionToUser(args[0]);
    if (!user) { return message.reply('Invalid User!'); }
    await message.guild.members.ban(user).catch(error=>{
        OK=false
        console.log(error)
    })
    OK?embed = new MessageEmbed()
        .setTitle(`Banned ${user.username}.`)
        .setColor('#ff0000')
        .setTimestamp()
        :embed=`Failed to ban ${user.username}. (Don't have perms)`
    message.channel.send(embed);
}
import{mentionToUser}from '../../libraries/library.js'
import{MessageEmbed}from 'discord.js';
export const name = "kick";
export const description = "Kick a member";
export const args = true;
export const usage = "<user>";
export const permissions = "KICK_MEMBERS";
export const botPerms=['KICK_MEMBERS']
export const guildOnly = true;
export async function execute(message, args) {
    let kickReason;
    let OK=true
    let user = mentionToUser(args.shift());
    kickReason=args.pop()
    if(kickReason==undefined){
        kickReason='(No reason given)'
    }
    if (!user) { return message.reply('Invalid User!'); }
        await message.mentions.members.first().kick({reason:kickReason}).catch(error=>{
        if(error.code===50013){
            message.reply('I cannot perform that action on that user! (No Perms)')
            OK=false
        }
    })
    if(OK){
        let embed = new MessageEmbed()
            .setTitle(`Kicked ${user.username} with reason ${kickReason}.`)
            .setColor('#ff0000')
            .setTimestamp();
        message.channel.send(embed);
    }
}

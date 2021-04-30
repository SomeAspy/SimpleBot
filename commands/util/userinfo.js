import { MessageEmbed } from "discord.js"
import { mentionToUser, randColor } from "../../library.js"
export const name = 'memberinfo'
export const description = 'Get info about a member'
export const cooldown = 5
export const aliases = ['whois']
export function execute(message,args){
    let user;
    if(args[0]){
        user=mentionToUser(args[0])
        if(!user){return message.reply('Invalid user!')}
    }else{user=message.author};
    const embed=new MessageEmbed()
    .setColor(randColor())
    .setTitle(`${user.tag}'s profile`)
    .setThumbnail(user.avatarURL({dynamic:true}))
    .addFields(
        {name:'ID:',value:user.id},
        {name:'Created at',value:user.createdAt},
        {name:'Is a bot?',value:user.bot},
        {name:'Flags:',value:user.flags}
    )
    message.channel.send(embed)
}
import { MessageEmbed } from "discord.js"
export const name='addrole'
export const description='Add a role to a user'
export const notAllowedInDM=true
export const args=true
export const permissions='MANAGE_ROLES'
export const botPerms=['MANAGE_ROLES']
export const usage='<user> <role>'
export async function execute(message,args){
    let embed
    let OK=false
    const user=message.mentions.members.first()
    if(!user){return message.channel.send('You must mention a user!')}
    let requestedRole=args.pop()
    console.log(requestedRole)
    if(isNaN(requestedRole)){
        requestedRole=message.guild.roles.cache.find(role=>role.name===requestedRole)
        user.roles.add(requestedRole)
        OK=true
    }else{
        requestedRole=message.guild.roles.cache.get(requestedRole)
    }
    OK?embed = new MessageEmbed()
        .setColor('#2bff00')
        .setTitle(`Added ${requestedRole.name} to ${user.displayName}!`)
        .setTimestamp()
        :embed=`could not add role to user.`
    message.channel.send(embed);
}
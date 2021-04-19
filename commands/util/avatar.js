const Discord=require('discord.js')
const lib=require("../../helper")

module.exports={
    name:'avatar',
    description:'Get the avatar of a user',
    aliases:['av','pfp','ava'],
    cooldown:5,
    execute(message,args){
        let user;
        if(!message.mentions.users.size){
            user=message.author.displayAvatarURL({dynamic:true})
        }
        const embed=new Discord.MessageEmbed()
        .setColor(lib.RandColor)
        .setImage(user)

    message.channel.send(embed)
    }
}
const Discord=require('discord.js');
const { randColor, mentionToUser } = require('../../library');

module.exports={
    name:'avatar',
    description:'Get the avatar of a user',
    aliases:['av','pfp','ava'],
    cooldown:5,
    execute(message,args){
        let user;
        if(args[0]){
            user=mentionToUser(args[0]);
            if(!user){return message.reply('Invalid User!')};
        }else{user=message.author}
        const embed=new Discord.MessageEmbed()
        .setTitle(`${user.username}'s avatar:`)
        .setColor(randColor())
        .setImage(user.displayAvatarURL({dynamic:true}))
        .setTimestamp()

    message.channel.send(embed)
    }
}
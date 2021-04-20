  
const Discord=require('discord.js');

module.exports={
    name:'avatar',
    description:'Get the avatar of a user',
    aliases:['av','pfp','ava'],
    cooldown:5,
    execute(message,args,client){
        let user;
        if(args[0]){
            user=client.lib.mentionToUser(args[0]);
            if(!user){return message.reply('Invalid User!')};
        }else{user=message.author}
        const embed=new Discord.MessageEmbed()
        .setTitle(`${user.username}'s avatar:`)
        .setColor(client.lib.randColor())
        .setImage(user.displayAvatarURL({dynamic:true}))
        .setTimestamp()

    message.channel.send(embed)
    }
}
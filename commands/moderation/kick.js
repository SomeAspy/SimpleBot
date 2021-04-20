const Discord=require('discord.js')
module.exports={
    name:"kick",
    description:"Kick a member",
    args:true,
    usage:"<user>",
    permissions:"KICK_MEMBERS",
    guildOnly:true,
    execute(message,args,client){
        let user=client.lib.mentionToUser(args[0],true,message);
        if(!user){return message.reply('Invalid User!')}
        message.mentions.members.first().kick()
        let embed=new Discord.MessageEmbed()
        .setTitle(`Kicked ${user.username}.`)
        .setColor('#ff0000')
        .setTimestamp()

        message.channel.send(embed)
    }
}
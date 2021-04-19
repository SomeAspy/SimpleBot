
const Discord=require("discord.js")
const { randColor } = require("../../helper")
module.exports={
    name:"serverinfo",
    description:"about the bot",
    cooldown:5,
    aliases:["server"],
    execute(message,args){
        let vLevel;
        switch(message.guild.verificationLevel){
            case 'NONE':vLevel='Anyone can talk.';break;
            case 'LOW':vLevel='Verified email required to talk.';break;
            case 'MEDIUM':vLevel='Must be on discord for 5 minutes to talk.';break;
            case 'HIGH':vLevel='Must be in this server for 10 minutes to talk';break;
            case 'VERY_HIGH':vLevel='Must have a verified phone number to talk';break;
        }
        const embed=new Discord.MessageEmbed()
        .setColor(randColor())
        .setTitle(`${message.guild.name}'s stats`)
        .setImage(message.guild.iconURL())
        .addFields(
            {name:"Server Owner:",value:`<@${message.guild.ownerID}>`},
            {name:"Creation Date:",value:message.guild.createdAt},
            {name:"Verification Level:",value:vLevel},
            {name:"Server ID:",value:message.guild.id},
            {name:"Boosts:",value:message.guild.premiumSubscriptionCount},
            {name:"Members out of max allowed:",value:`${message.guild.memberCount}/${message.guild.maximumMembers}`}
        .setTimestamp()

        )
        message.channel.send(embed)
    }

}
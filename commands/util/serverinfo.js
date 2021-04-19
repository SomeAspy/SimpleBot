
const Discord=require("discord.js")
const lib=require("../../helper")

module.exports={
    name:"ServerInfo",
    description:"about the bot",
    cooldown:5,
    aliases:["server","serverinfo"],
    execute(message,args){
        const embed=new Discord.MessageEmbed()
        .setColor(lib.RandColor)
        .setTitle(`${message.guild.name}'s stats`)
        .setImage(message.guild.iconURL())
        .addFields(
            {name:"Server Owner:",value:message.guild.owner},
            {name:"Creation Date:",value:message.guild.createdAt},
            {name:"Verification Level:",value:message.guild.verificationLevel},
            {name:"Content Filter:",value:message.guild.explicitContentFilter},
            {name:"Boosts:",value:message.guild.premiumSubscriptionCount},
            {name:"members:",value:message.guild.memberCount}

        )
        message.channel.send(embed)
    }

}
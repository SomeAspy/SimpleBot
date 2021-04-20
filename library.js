const client = require("./init");
//function guild(guildID){return client.guilds.cache.get(guildID)}
module.exports={
    randColor:function(){return Math.floor(Math.random()*16777215).toString(16);},
    mentionToUser:function(mention,memberMode=false,message){
        const matches=mention.match(/^<@!?(\d+)>$/);
        if(!matches)return;
        const mid=matches[1];
        if(!memberMode){
        return client.users.cache.get(mid);
        }else{
            return client.guilds.cache.get(message.guild.id).member(mid)
        }
    }
}
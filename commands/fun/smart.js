module.exports={
    name:"smart",
    description:"Totally Accurate IQ test",
    aliases:["smart","iq"],
    cooldown:5,
    execute(message,args){
        message.reply("has an IQ of "+Math.floor(Math.random()*201))
    }
}
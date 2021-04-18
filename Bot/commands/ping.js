module.exports={
    name:"ping",
    description:"Response Time",
    execute(message,args){
        message.channel.send("PONG!");
    },
};
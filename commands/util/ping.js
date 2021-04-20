module.exports={
    name:"ping",
    description:"Response Time",
    execute(message){message.channel.send(`PONG!\nRoundtrip latency: ${sent.createdTimestamp-message.createdTimestamp}ms`)}
    }
module.exports={
    name:"ping",
    description:"Response Time",
    execute(message){message.channel.send('Pinging...').then(sent=>{sent.edit(`PONG!\nRoundtrip latency: ${sent.createdTimestamp-message.createdTimestamp}ms`)})}}
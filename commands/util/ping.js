export const name = "ping"
export const description = "Response Time"
export function execute(message) {
     message.channel.send('Pinging...').then(sent => {
         sent.edit(`PONG!\nRoundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`) }) }
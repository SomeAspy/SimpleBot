export const name = "smart"
export const description = "Totally Accurate IQ test"
export const aliases = ["smart", "iq"]
export const cooldown = 5
export function execute(message, args) {
    message.reply("has an IQ of " + Math.floor(Math.random() * 201))
}
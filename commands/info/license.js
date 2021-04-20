export const name = 'license'
export const description = 'legal stuff'
export const cooldown = 60
export const aliases = ['copyright']
export function execute(message) { message.reply('I am licensed under the GPLv3 license.\nhttps://www.gnu.org/licenses/gpl-3.0.txt') }
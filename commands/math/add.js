import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='add';
export const description='find the sum of numbers'
export const aliases=['addition','sum']
export function execute(message,args){
    if(!args[0||1]){return message.channel.send('You must supply at least 2 numbers')}
    let text=`The arcsine of ${args} is ${Math.asin(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
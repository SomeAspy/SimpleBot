import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='sqrt';
export const description='find the square root of a number'
export const aliases=['squareroot','root']
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a single number')}
    let text=`The square root of ${args} is ${Math.sqrt(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
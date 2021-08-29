import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='log2';
export const description='find the base-2 logarithm of a number'
export const aliases=['base2']
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The base-2 logarithm of ${args} is ${Math.log2(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
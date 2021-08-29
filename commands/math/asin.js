import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='asin';
export const description='find the arcsine of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The arcsine of ${args} is ${Math.asin(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
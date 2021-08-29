import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='acos';
export const description='find the arccosine of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The arccosine of ${args} is ${Math.acos(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
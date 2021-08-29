import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='acosh';
export const description='find the hyperbolic arccosine of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The hyperbolic arccosine of ${args} is ${Math.acosh(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
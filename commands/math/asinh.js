import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='asinh';
export const description='find the hyperbolic arcsine of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The hyperbolic arcsine of ${args} is ${Math.asinh(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
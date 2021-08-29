import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='cosh';
export const description='find the hyperbolic cosine of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The hyperbolic cosine of ${args} is ${Math.cosh(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
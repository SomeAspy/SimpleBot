import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='cbrt';
export const description='find the cube root of a number'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The cube root of ${args} is ${Math.cbrt(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
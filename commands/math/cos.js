import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='cos';
export const description='find the cosine of a number'
export const aliases=['cosine']
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The cosine of ${args} is ${Math.cos(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
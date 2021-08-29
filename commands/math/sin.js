import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='sin';
export const description='find the sine of a number'
export const aliases=['sine']
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The sine of ${args} is ${Math.sin(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
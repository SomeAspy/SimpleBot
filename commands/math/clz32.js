import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='clz32';
export const description='find the number of leading bits of a 32 bit integer'
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The number leading 0 bits in ${args} is ${Math.clz32(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
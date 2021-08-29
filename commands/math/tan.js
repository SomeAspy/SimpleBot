import {MessageEmbed} from 'discord.js';
import { randColor } from '../../libraries/library.js';
export const name='tan';
export const description='find the tangent of a number'
export const aliases=['tangent']
export function execute(message,args){
    if(!args[0]){return message.channel.send('You must supply a number')}
    let text=`The tangent of ${args} is ${Math.tan(args)}.`

    let embed=new MessageEmbed()
        .setTitle(text)
        .setTimestamp()
        .setColor(randColor());
    message.channel.send(embed)
}
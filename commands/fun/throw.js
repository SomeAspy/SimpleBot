import {nounList} from '../../nouns.js';
import {MessageEmbed} from 'discord.js';
import { randColor, randomItem, mentionToUser } from '../../library.js';
export const name='throw';
export const description='throw something at someone';
export const aliases=['launch'];
export function execute(message,args){
    let text=`${message.author.username} throws a ${randomItem(nounList)} at some innocent passerby!`
    let user;
    if(args[0]){
        user=mentionToUser(args[0]);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} throws a ${randomItem(nounList)} at ${user.username}!`
        }
    }
let embed=new MessageEmbed()
    .setTitle(text)
    .setTimestamp()
    .setColor(randColor());
message.channel.send(embed)
}
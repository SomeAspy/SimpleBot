import {nounList} from '../../libraries/nouns.js';
import {verbsList} from '../../libraries/verbs.js';
import {MessageEmbed} from 'discord.js';
import { randColor, randomItem, mentionToUser } from '../../libraries/library.js';
export const name='kill';
export const description='Kill someone!';
export const aliases=['murder','assassinate','exterminate','homicide'];
export function execute(message,args){
    let text=`${message.author.username} ${randomItem(verbsList)}s some poor passerby using ${randomItem(nounList)}, killing them!`
    let user;
    if(args[0]){
        user=mentionToUser(args[0]);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} ${randomItem(verbsList)}s ${user.username} using ${randomItem(nounList)}, killing them!`
        }
    }
let embed=new MessageEmbed()
    .setTitle(text)
    .setTimestamp()
    .setColor(randColor());
message.channel.send(embed)
}
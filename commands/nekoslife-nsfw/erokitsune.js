import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../libraries/library.js'
export const name='erokitsune';
export const description='Get a erokitsune pic!';
export const NSFW=true;
export function execute(message,args){
    let user;
    let text='These commands only work in NSFW channels'
    if(args[0]){
        user=mentionToUser(args[0]);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} erokitsunes ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.nsfw.eroKitsune()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
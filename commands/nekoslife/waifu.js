import {neko} from '../../nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../library.js'
export const name='waifu';
export const description='waifu a person!';
export function execute(message,args){
    let user;
    let text='You can waifu another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0]);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} waifus ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.waifu()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../libraries/library.js'
export const name='kiss';
export const description='kiss a person!';
export function execute(message,args){
    let user;
    let text='You can kiss another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0]);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} kisses ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.kiss()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
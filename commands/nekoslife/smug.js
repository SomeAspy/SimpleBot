import {neko} from '../../nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../library.js'
export const name='smug';
export const description='smug at person!';
export function execute(message,args,client){
    let user;
    let text='You can smug at another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0],client);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} smugs at ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.smug()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
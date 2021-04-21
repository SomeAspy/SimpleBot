import {neko} from '../../nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../library.js'
export const name='animeavatar';
export const description='avatar a person!';
export function execute(message,args,client){
    let user;
    let text='You can avatar another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0],client);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} avatars ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.avatar()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
import {neko} from '../../nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../library.js'
export const name='foxgirl';
export const description='foxgirl a person!';
export function execute(message,args,client){
    let user;
    let text='You can foxgirl another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0],client);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} foxgirls ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.foxgirl()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
import {neko} from '../../nekolib.js'
import { MessageEmbed } from "discord.js";
import {mentionToUser, randColor} from '../../library.js'
export const name='poke';
export const description='poke a person!';
export function execute(message,args,client){
    let user;
    let text='You can poke another person by mentioning them!'
    if(args[0]){
        user=mentionToUser(args[0],client);
        if(!user){return message.reply('Invalid user!')}else{
            text=`${message.author.username} pokes ${user.username}!`
        }}
    async function returnNeko(){
        const nekoOut=await neko.sfw.poke()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
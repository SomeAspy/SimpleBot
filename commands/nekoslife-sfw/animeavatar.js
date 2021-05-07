import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {randColor} from '../../libraries/library.js'
export const name='animeavatar';
export const description='Get an anime themed avatar!';
export function execute(message){
    async function returnNeko(){
        const nekoOut=await neko.sfw.avatar()
        const embed=new MessageEmbed()
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
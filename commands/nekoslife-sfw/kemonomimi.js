import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {randColor} from '../../libraries/library.js'
export const name='kemonomimi';
export const description='Get a kemonomimi gif!';
export function execute(message){
    async function returnNeko(){
        const nekoOut=await neko.sfw.kemonomimi()
        const embed=new MessageEmbed()
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
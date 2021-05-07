import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {randColor} from '../../libraries/library.js'
export const name='gecg';
export const description='Get a genetically modifed cat girl gif!';
export function execute(message){
    async function returnNeko(){
        const nekoOut=await neko.sfw.gecg()
        const embed=new MessageEmbed()
            .setTitle(text)
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
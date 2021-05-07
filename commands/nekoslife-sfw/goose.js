import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {randColor} from '../../libraries/library.js'
export const name='goose';
export const description='Get a goose gif!';
export function execute(message){
    async function returnNeko(){
        const nekoOut=await neko.sfw.goose()
        const embed=new MessageEmbed()
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
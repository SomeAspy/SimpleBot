import {neko} from '../../APIs/nekolib.js'
import { MessageEmbed } from "discord.js";
import {randColor} from '../../libraries/library.js'
export const name='woof';
export const description='Get a dog gif!';
export function execute(message){
    async function returnNeko(){
        const nekoOut=await neko.sfw.woof()
        const embed=new MessageEmbed()
            .setColor(randColor())
            .setImage(nekoOut.url)
            .setTimestamp()
        message.channel.send(embed)
    }
    returnNeko()
}
import { MessageEmbed } from "discord.js";
import { randColor, combineArgs } from "../../library.js";

export const name='mock';
export const description='mock something';
export const args=true
export function execute(message,args){
    let pos
    let output;
    console.log(args)
    args=args.join(' ').toUpperCase().split('')
    console.log(args)
    
    const embed=new MessageEmbed()
        .setTitle(output)
        .setTimestamp()
        .setColor(randColor())
    message.channel.send(embed)
}
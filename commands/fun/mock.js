import { MessageEmbed } from "discord.js";
import { randColor } from "../../library.js";

export const name='mock';
export const description='mock something';
export const args=true
export function execute(message,args){
    let output;
    args=args.split('')
    args.foreach(item=>{
        if(args.length%2){
            try{item=item.toUpperCase()}
            finally{output+=item}
        }
        else{
            try{item=item.toLowerCase()}
            finally{output+=item}
        }  
    })
    const embed=new MessageEmbed
        .setTitle(output)
        .setTimestamp()
        .setColor(randColor())
    message.channel.send(embed)
}
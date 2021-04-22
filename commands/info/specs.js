import {randColor} from '../../library.js'
import {MessageEmbed} from 'discord.js'
export const name='specs';
export const description='the server I run on!';
export function execute(message){
    let embed=new MessageEmbed()
        .setTitle('My specs')
        .setColor(randColor())
        .addFields(
            {name:'OS:',value:'Ubuntu 20.10 64bit'},
            {name:'Host:',value:'Google Compute engine F1-Micro'},
            {name:'RAM:',value:'572MB'},
            {name:'CPU:',value:'1 Intel Xeon 5 Hyperthread @ 2.299GHz'},
            {name:'NodeJS:',value:'14.16.1'}
        )
    message.channel.send(embed);
}
//reply Setup
let NoArgs="You must provide arguments!"
let NoDM="This command cannot be run in DMs!"
let InvalidCommand="That command does not seem to exist!"
let NoPerms="Your Perms don't allow you to do this"

import { readdirSync } from "fs";
import { Client, Collection } from 'discord.js';
//require('dotenv').config();
import dotenv from 'dotenv'
dotenv.config()
const client=new Client();
client.lib=import('./library.js')
//export const client = client;
const prefix=process.env.PREFIX;
client.commands=new Collection();
const commandFolders=readdirSync('./commands');
for(const folder of commandFolders){
    const commandFiles=readdirSync(`./commands/${folder}`).filter(file=>file.endsWith('.js'));
    for(const file of commandFiles){
        const command=import(`./commands/${folder}/${file}`);
        client.commands.set(command.name,command);
    }
}
client.cooldowns=new Collection();
client.once("ready",()=>{console.log("Ready!");});
client.on("message",message=>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args=message.content.slice(prefix.length).trim().split(/ +/);
    const commandName=args.shift().toLowerCase();
    const command=client.commands.get(commandName)||client.commands.find(cmd=>cmd.aliases&&cmd.aliases.includes(commandName));
    if(!command) return;
    if(command.guildOnly&&message.channel.type==="dm"){
        return message.reply(NoDM)
    }
    if(command.permissions){
        const authorPerms=message.channel.permissionsFor(message.author);
        if(!authorPerms||!authorPerms.has(command.permissions)){
            return message.reply(NoPerms);
        }
    }
    if(command.args&&!args.length){
        let reply=NoArgs
        if(command.usage){
            reply+=`\nProper usage: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.reply(reply)
    }
    const{cooldowns}=client;
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Collection());
    }
    const now=Date.now();
    const timestamps=cooldowns.get(command.name);
    const cooldownAmount=(command.cooldown||3)*1000;
    if(timestamps.has(message.author.id)){
        const expirationTime=timestamps.get(message.author.id)+cooldownAmount;
        if(now<expirationTime){
            const timeLeft=(expirationTime-now)/1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more seconds`)
        }
    }
    timestamps.set(message.author.id,now);
    setTimeout(()=>timestamps.delete(message.author.id),cooldownAmount);
    try{
        command.execute(message,args,client);
        console.log('ok')
    } catch(error){
        console.error(error);
        message.reply(InvalidCommand);
    }
})
client.login(process.env.DISCORD_TOKEN);
/*
Made by Aiden (SomeAspy)
GitHub: https://github.com/SomeAspy/SimpleBot
License: GPLv3
*/

//Setup
const fs=require("fs");
const Discord=require('discord.js');
require('dotenv').config();
const client=new Discord.Client();
const prefix=process.env.PREFIX;
client.commands=new Discord.Collection();
const commandFiles=fs.readdirSync("./commands").filter(file=>file.endsWith(".js"));

for(const file of commandFiles){
    const command=require(`./commands/${file}`);
    client.commands.set(command.name,command);
}

client.once("ready",()=>{console.log("Ready!");});

client.on("message",message=>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args=message.content.slice(prefix.length).trim().split(/ +/);
    const command=args.shift().toLowerCase();
    if(!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message,args);
    } catch(error){
        console.error(error);
        message.reply("That command does not seem to exist!");
    }
})

client.login();


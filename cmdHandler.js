const ownerID='516750892372852754'

const noArgsMessage='You must provide arguments!';
const notAllowedInDM='You cannot run this command in DMs!';
const invalidCommand='This command does not seem to exist!';
const noUserPerms='You do not have the permissions required to do that!';
const noBotPerms='I cannot do that due to my permissions!';
const notNSFWChannel='This command can only be used in NSFW channels!'
const notOwner='This command can only be used by the set owner!'


export const prefix='-'

import {Client} from 'discord.js'
import dotenv from 'dotenv'

export const client=new Client();

import { Collection } from 'discord.js';
import { readdirSync } from "fs";

import {createConnection} from 'mysql'


client.commands=new Collection();

dotenv.config()

const con=createConnection({
    host:process.env.SQL_HOST,
    user:process.env.SQL_USER,
    password:process.env.SQL_PASSWORD
})
console.log(con)

con.connect(function(err){
    if(err)throw err;
    console.log('SQL Connected!')
})

const commandFolders=readdirSync('./commands');
for(const folder of commandFolders){
    const commandFiles=readdirSync(`./commands/${folder}`).filter(file=>file.endsWith('.js'));
    for(const file of commandFiles){
        let command = import (`./commands/${folder}/${file}`).then(command=>{
        client.commands.set(command.name,command);
        console.log(command)
        }
        )
    }
}
client.once('ready',()=>console.log('Bot is ready to accept commands!'))

let cooldowns=new Collection()
client.on('message',async message=>{
    if(!message.content.startsWith(prefix)||message.author.bot)return;
    const args=message.content.slice(prefix.length).trim().split(/ +/);
    const commandName=args.shift().toLowerCase();
    const command=client.commands.get(commandName)||client.commands.find(cmd=>cmd.aliases&&cmd.aliases.includes(commandName));
    console.log('Command received! Attempting to execute...');
    if(!command) return;
    
    //command guildonly property
    if(command.guildOnly&&message.channel.type==='dm'){
        return message.reply(notAllowedInDM);
    }

    //command permissions property
    if(command.permissions){
        const authorPerms=message.channel.permissionsFor(message.author);
        if(!authorPerms||!authorPerms.has(command.permissions)){
            return messsage.reply(noUserPerms);
        }
    }

    //command require arguments property
    if(command.args&&!args.length){
        let reply=noArgsMessage
        //command usage property
        if(command.usage){
            reply+=`\nProper usage:\`${prefix}${command.name} ${command.usage}\``;
        }
        return message.reply(reply);
    }

    //command NSFW property
    if(command.NSFW&&!message.channel.nsfw){
        return message.reply(notNSFWChannel)
    }

    //command cooldown property/manager
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Collection());
    }
    const now=Date.now();
    const timestamps=cooldowns.get(command.name);
    //two as default cooldown
    const cooldownAmount=(command.cooldown||2)*1000;
    if(timestamps.has(message.author.id)){
        const expirationTime=timestamps.get(message.author.id)+cooldownAmount;
        if(now<expirationTime){
            const timeLeft=(expirationTime-now)/1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more seconds before using that command again`);
        }
    }
    timestamps.set(message.author.id,now);
    setTimeout(()=>timestamps.delete(message.author.id),cooldownAmount);
    
    //attempt to execute command
    try{
        await command.execute(message,args);
    }
    catch(error){
        console.error(error);
        message.reply(invalidCommand)
    }

})
client.login(process.env.DISCORD_TOKEN)
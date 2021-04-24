import {Client} from 'discord.js';
import dotenv from 'dotenv'
dotenv.config()
export const client=new Client()
client.login(process.env.DISCORD_TOKEN)
client.once('ready',()=>console.log('Bot is ready to accept commands!'))

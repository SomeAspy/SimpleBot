import ytdl from 'ytdl-core';
export const name='play';
export const description='play something';
export const args=true
export async function execute(message,args,client){
    if(!message.member.voice.channel){
        return message.reply('You are not in a VC!');
    }
    const connection=await message.member.voice.channel.join();
     const stream=ytdl(args,{filter:'audioonly'});
     const dispatcher=connection.play(stream);
}
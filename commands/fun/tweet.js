/*import fakeTweet from 'fake-tweet'
import {randColor, mentionToUser, randomItem} from '../../library.js'
export const name='kill';
export const description='kill someone';
export const aliases=['murder','assassinate','exterminate','homicide'];
export function execute(message,args,client){
    let userD;
    if (args[0]) {
        userD = mentionToUser(args[0], client);
        if (!userD) { return message.reply('Invalid User!'); };
    } else { userD = message.author; }
    let App(){
        const config={
            user:{
                nickname:'todo',
                name:userD.username,
                avatar:userD.displayAvatarURL({format:'png'}),
                verified:randomItem([true,false]),
                locked:false
            },
        }
    }
}
*/
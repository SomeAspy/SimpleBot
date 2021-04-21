//import {client} from './init.js'
export function randColor() { return Math.floor(Math.random() * 16777215).toString(16); }
export function mentionToUser(mention,client) {
    if(mention.isInteger){
        return mention;
    }
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches)
        return;
    return client.users.cache.get(matches[1]);
}
export function randomItem(list){return list[Math.floor(Math.random()*list.length)]}
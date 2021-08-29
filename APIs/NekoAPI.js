
import {get} from './HTTPSAPI.js'
export async function neko(request){
    let response=await get('nekos.life',`/api/v2/img/${request}`)
    return response.match(/"[^"]*"/g).pop()
}
console.log(await neko('trap'))
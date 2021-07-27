//Makes calls to https://nekos.life/
import https from 'https'
const options={
    hostname:'nekos.life',
    port:443,
    path:'',
    method:'GET'
}

const req=https.request(options,res=>{
    console.log()
})
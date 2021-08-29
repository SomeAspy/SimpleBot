import https from 'https'

export async function get(host,path){
    return await new Promise((resolve,reject)=>{
        let data='';
        https.get({host,path},(res)=>{
            res.on('data',d=>data+=d.toString())
            res.on('end',_=>resolve(data))
            res.on('error',e=>reject(e))
        })
    })
}

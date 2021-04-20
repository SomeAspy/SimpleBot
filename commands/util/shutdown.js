const owner=process.env.OWNER;
module.exports={
    name:'shutdown',
    execute(message){
        if(message.author.id===owner){
            message.reply('Stopping!')
            return process.exit()
        }else{
            return(message.reply('only the owner of the bot can do this!\nIf you cloned the bot remember to put your ID in the owner variable of your .env file!'))
        }
    }
}
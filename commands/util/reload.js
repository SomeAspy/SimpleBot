const fs=require('fs');
module.exports={
    name:'reload',
    description:'reload a command',
    args:true,
    execute(message,args){
        const command=message.client.commands.get(commandName)||message.client.commands.find(cmd=>cmd.aliases&&cmd.aliases.includes(commandName));
        if(!command)return message.channel.send('There is no command matching that name to reload');
        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
        try{
            const newCommand=require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name,newCommand);
        }catch(error){
            console.error(error);
            message.channel.send(`There was an error reloading the command! ${error.message}`)
        }
    }
}
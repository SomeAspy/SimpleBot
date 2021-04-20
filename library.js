const { client } = require("./init");
module.exports={
    randColor:function(){return Math.floor(Math.random()*16777215).toString(16);},
    mentionToUser:function(mention){
        const matches=mention.match(/^<@!?(\d+)>$/);
        if(!matches)return;
        return client.users.cache.get(matches[1]);
    }

}
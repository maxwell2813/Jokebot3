const discord = require("discord.js");
const talkedRecently = new Set();
const client = new discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("" + str)
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
	
    if(message.author.bot) return;
	
    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

    if(message.content.includes("gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
        talkedRecently.add(msg.author.id);
	    
        setTimeout(() => {
		
		
          talkedRecently.delete(msg.author.id);
		
        }, 60000);
    }

    if(message.content.includes("Gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
})

// Allows the bot to login

client.login(process.env.BOT_TOKEN);

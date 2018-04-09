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
	
    if(message.content.includes("gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
    if(message.content.includes("Gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }

    if(message.content.includes("GAy", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
    if(message.content.includes("GAY", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
    if(message.content.includes("GaY", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
    if(message.content.includes("gaY", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
    if(message.content.includes("gAy", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
    if(message.content.includes("gaY", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!*** \n \n https://imgur.com/gallery/f4jxP');
    }
	
})

// Allows the bot to login

client.login(process.env.BOT_TOKEN);

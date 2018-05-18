const discord = require("discord.js");
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
	
    if(message.content.includes("ping", message)){
        message.channel.sendMessage('Pong!');
    }
	
    if(message.content.includes("stellaris", message)){
        message.channel.sendMessage('***NIGGA I SMELL A GAY ASS POST FROM A GAY ASS COMPANY FROM A DEADASS PERSON*** \n \n https://imgur.com/PyaXvCI');
    }
	
    if(message.content.includes("Stellaris", message)){
        message.channel.sendMessage('***NIGGA I SMELL A GAY ASS POST FROM A GAY ASS COMPANY FROM A DEADASS PERSON*** \n \n https://imgur.com/PyaXvCI');
    }
		
    if(message.content.includes("STELLARIS", message)){
        message.channel.sendMessage('***NIGGA I SMELL A GAY ASS POST FROM A GAY ASS COMPANY FROM A DEADASS PERSON*** \n \n https://imgur.com/PyaXvCI');
    }
})

client.login(process.env.BOT_TOKEN);

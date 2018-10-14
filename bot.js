const discord = require("discord.js");
const client = new discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("" + str)
}

function agay () {
	var rand = ['***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!***','***WHAT DID YOU JUST SAY?!***','***~~I NEED MORE IDEAS FOR REPLYS DAMN IT~~***','***TYPE OVERUSED GAY JOKE HERE***','*quit spamming this fucking command*','ygaygsyagygygaygaygayagyagyagaygaygayagyagyagyagyagyagyaga','no u','Warning: User too gay for command to execute']
	var dest = ['***Warframe > Destiny fite me***', '**Warframes better**', '***Destinys a shit game lmao***']
	return rand[Math.floor(Math.random()*rand.length)];
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
	
    if(message.author.bot) return;
	
    if(message.content.includes("gay", message)){
        message.channel.sendMessage('' + agay());
    }
    if(message.content.includes("Gay", message)){
        message.channel.sendMessage('' + agay());
    }

    if(message.content.includes("GAy", message)){
        message.channel.sendMessage('' + agay());
    }
	
    if(message.content.includes("GAY", message)){
        message.channel.sendMessage('' + agay());
    }
	
    if(message.content.includes("GaY", message)){
        message.channel.sendMessage('' + agay());
    }
	
    if(message.content.includes("gaY", message)){
        message.channel.sendMessage('' + agay());
    }
	
    if(message.content.includes("gAy", message)){
        message.channel.sendMessage('' + agay());
    }
	
	/*
    if(message.content.includes("ping", message)){
        message.channel.sendMessage('Pong!');
    }
    */
	
    if(message.content.includes("overwatch", message)){
        message.channel.sendMessage('***OVERWATCH? MORE LIKE OVERSHITE LMAO!!!***');
    }
	
    if(message.content.includes("Overwatch", message)){
        message.channel.sendMessage('***OVERWATCH? MORE LIKE OVERSHITE LMAO!!!***');
    }
	if(message.content.includes("Destiny", message)){
        message.channel.sendMessage('' + dest);
    }
	if(message.content.includes("destiny", message)){
        message.channel.sendMessage('' + dest);
    }	
})

client.login(process.env.BOT_TOKEN);

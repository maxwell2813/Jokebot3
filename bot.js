const discord = require("discord.js");

// Makes the discord bot run in its own client
const client = new discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("" + str)
}

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Shitposts', { type: 'WATCHING' });
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
	
	if(message.author.bot) return;
	
    if(message.content.includes("gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!***                                                                                                                                                                               https://imgur.com/gallery/f4jxP');
    }
    if(message.content.includes("Gay", message)){
        message.channel.sendMessage('***DID SOMEONE JUST SAY GAY? LMAO YOU NIGGAS GAY!***                                                                                                                                                                               https://imgur.com/gallery/f4jxP');
    }

})

// Allows the bot to login

client.login(process.env.BOT_TOKEN);

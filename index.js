const Discord = require("discord.js");

const bot = new Discord.Client();

const token = "## token para acesso à API do discord ##";

const bot_char = "";

bot.on("ready", () =>{
	console.log("Bot online!");
	let channel = bot.channels.get("## id do canal ##");
	channel.send("Estou online!")
	.then((msg) => {
		msg.delete(30000);
	});
})

bot.on("message", msg=>{
	switch(msg.content){
		case (bot_char+"ping"):
			msg.channel.send("pong... ") // Placeholder for pinging ... 
			.then((msg2) => { // Resolve promise
				msg2.edit("pong... " + (Date.now() - msg.createdTimestamp) + "ms") // Edits message with current timestamp minus timestamp of message
			});
			break;
			
		case (bot_char+"aquela carinha"):
			msg.channel.send("( ͡° ͜ʖ ͡°)");
			break;
			
		case (bot_char+"shrug"):
			msg.channel.send("¯\\\\_(ツ)\\_/¯");
			break;
			
		case (bot_char+"OwO"):
			msg.reply("UwU");
			break;
			
		case (bot_char+"UwU"):
			msg.reply("OwO");
			break;
			
		case (bot_char+"ewe"):
			msg.reply("ÙwÚ");
			break;
		
		case (bot_char+"sanduiche"):
			{
				let attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/606204368521396279/606205598442455050/20160128150534.png");
				msg.channel.send(attachment);
			}
			break;
		
		case (bot_char+"subway"):
			{
				let attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/606204368521396279/606205688825511957/cerq.png");
				msg.channel.send(attachment);
			}
			break;
		
		case (bot_char+"furry fedido"):
			msg.channel.send("<@176155417754337280>");
			break;
		
		case (bot_char+"vsf bot"):
			switch(msg.author.id){
				case "176155417754337280":
					msg.reply("não, pq foi vc que me programou");
					break;
					
				case "443237859256958984":
					msg.reply("vai você arrombada ¬¬");
					break;
					
				default:
					msg.reply("vai você arrombado ¬¬");
					break;
			}
			break;
		
		case (bot_char+"tito"):
			{
				let max = 1;
				let min = 0;
				let numero = parseInt((Math.random() * (max - min + 1)), 10) + min;
				
				let attachment;
				// Send the attachment in the message channel
				
				
				switch(numero){
					case 0:
						attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/606204368521396279/606205395853115392/unknown.png");
						break;
					case 1:
						attachment = new Discord.Attachment("https://cdn.discordapp.com/attachments/606204368521396279/606205446671433728/unknown.png");
						break;
				}
				
				msg.channel.send(attachment);
			}
			break;
	}	
})

bot.login(token);
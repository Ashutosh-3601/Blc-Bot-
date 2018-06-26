const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r5 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#5', '**🔶Keep the chat to respective chat rooms. Bot commands are to be typed in #bot-commands and not in #general-chat. Violating will get you muted and a Warning. 3 Warning will result in a Kick/ Ban.**');
		message.channel.send(r5);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule5',
	aliases: ['r5'],
};
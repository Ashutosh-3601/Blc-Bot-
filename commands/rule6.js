const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r6 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#6', '**🔶Speak only English in text channels. No other languages allowed. This will be violated by Admins to keep stuff secret. You might get Muted for doing this.**')
			.addField('Further Info', '**Hope you guys have a great time here. Please follow the rules and let us be friendly. Violation of rules is annoying to the whole community and therefore it\'s better to follow them with care.Any further Queries and Problems? Contact an Administrator or a Moderator.**');
		message.channel.send(r6);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule6',
	aliases: ['r6'],
};
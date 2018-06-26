const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r3 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#3', '**🔶Respect your fellow members and be Polite. You\'ll be temp muted if found violating or reported.**');
		message.channel.send(r3);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule3',
	aliases: ['r3'],
};
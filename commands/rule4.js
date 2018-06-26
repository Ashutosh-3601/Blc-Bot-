const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r4 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#4', '**🔶 Politics, Sex, Gore, Religion, Swear Words or any of the text or images relating to these categories are strictly forbidden. Any one violating will be Permanently Banned.**');
		message.channel.send(r4);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule4',
	aliases: ['r4'],
};
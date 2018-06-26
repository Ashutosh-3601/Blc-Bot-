const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r1 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#1', '**Most Important\nWe Follow [Discord TOS](https://discordapp.com/terms) And [Community GuideLines](https://discordapp.com/guidelines). We cannot tolerate violation of these rule and breaking these Will Get you PERMANENT BAN**');
		message.channel.send(r1);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule1',
	aliases: [],
};
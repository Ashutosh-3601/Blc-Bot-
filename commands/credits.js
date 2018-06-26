const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setTitle('BLc MOD™ CREDITS')
		.setColor('RANDOM')
		.addField('Main Author', 'Ashutosh#3601<:nitro:446702659047522304>')
		.addField('Helpers :hearts:', '✩Gαﾚαxψ✩*)#8716<:discord:446702657944682508>\nSai Chinna#6718<:discord:446702657944682508>')
		.setThumbnail(client.avatarURL);
	message.channel.send({ embed });
};
module.exports.help = {
	name:'credits',
	aliases: [],
};
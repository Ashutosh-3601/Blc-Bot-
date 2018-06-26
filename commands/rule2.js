const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(message.author.id == 316943845596200960 || message.author.id == 265520872746385409) {
		const r2 = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Rule#2', '**🔶You are not supposed to Argue with the Staff of the server. Their Decisions will be final. If you think any Moderator is misusing his power you might wanna report it to an Admin in PM and you\'re not supposed to talk about it in the server. Improper or Wrong Reports on a Staff will get you Banned Permanently.\nAlternativily You Can Report A Member Using BLC MOD™ BOT by `*report @Member {valid reason}`**');
		message.channel.send(r2);
	}
	else {
		message.reply('Kindly Contact Ashutosh#3601');
	}
};
module.exports.help = {
	name:'rule2',
	aliases: ['r2'],
};
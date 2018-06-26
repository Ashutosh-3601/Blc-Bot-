const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	const em = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField('No <:Warning:449231978751983626>', 'This Is Only Authorises To BOT AUTHOR, **No U**')
		.setFooter();
	const kk = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField('Warn <:Warning:449231978751983626>', 'Fake Join Made')
		.setFooter(`Testing By ${message.author}`);
	if(!message.author.id == 316943845596200960) return message.channel.send(em);
	client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	const kickChannel = message.guild.channels.find('name', 'blcbot-log');
	if(!kickChannel) return;
	kickChannel.send(kk);
};
module.exports.help = {
	name:'fjoin',
	aliases: ['fakejoin', 'fakej'],
};

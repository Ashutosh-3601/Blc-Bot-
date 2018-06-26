const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!rUser) return message.channel.send('Couldn\'t find user.');
	const rreason = args.join(' ').slice(22);
	const reportEmbed = new Discord.RichEmbed()
		.setDescription('Reports')
		.setColor('#15f153')
		.addField('Reported User', `${rUser} with ID: ${rUser.id}`)
		.addField('Reported By', `${message.author} with ID: ${message.author.id}`)
		.addField('Channel', message.channel)
		.addField('Time', message.createdAt)
		.addField('Reason', rreason);

	const reportschannel = message.guild.channels.find('name', 'blcbot-log');
	if(!reportschannel) return message.channel.send('Couldn\'t find reports channel.');
	message.delete().catch(error => message.reply(`Report Error ${error}`));
	reportschannel.send(reportEmbed);
	return;
};
module.exports.help = {
	name:'report',
	aliases: [],
};
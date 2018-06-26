const Discord = require('discord.js');

// Command Handler
exports.run = async (client, message) => {

	// Variables
/*	let m = '';
	m += `I am aware of ${message.guild.channels.size} channels\n`;
	m += `I am aware of ${message.guild.members.size} members\n`;
	m += `I am aware of ${client.channels.size} channels overall\n`;
	m += `I am aware of ${client.guilds.size} guilds overall\n`;
	m += `I am aware of ${client.users.size} users overall\n`;
	message.channel.send(m);
/*	const servers = client.guilds.size;
	let users = 0;
	const channels = client.channels.size;
	client.guilds.map(g => users += g.memberCount);
	const embed = new Discord.MessageEmbed()
		.setTitle('Community Channels')
		.addField('Servers', servers, true)
		.addField('Users', users, true)
		.addField('Channels', channels, true);
	message.channel.send(embed);
*/
	const m = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle('**Stats**')
		.setDescription(`I am aware of **${message.guild.channels.size}** channels\nI am aware of **${message.guild.members.size}** members\nI am aware of **${client.channels.size}** channels overall\nI am aware of **${client.guilds.size}** guilds overall\nI am aware of **${client.users.size}** users overall\n`);
	message.channel.send(m);
};
module.exports.help = {
	name:'stats',
	aliases: [],
};
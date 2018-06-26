const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
	const member = message.mentions.members.first();
	if (!member) return message.reply('you haven\'t specified a user!');
	const muteRole = message.guild.roles.find('name', 'BLCMuted');
	let kReason = args.slice(2).join(' ');
	if(!kReason) kReason = 'No reason provided';
	if(!member.roles.has(muteRole.id)) return message.reply('They don\'t have that role.');
	await (member.removeRole(muteRole.id)).catch(console.error);
	const unmute2 = new Discord.RichEmbed()
		.setTitle('Unmuted successfully')
		.setColor('#ce5a5d')
		.setDescription(`You have been unmuted, ${member.user.tag}, sorry for the inconvinience!`)
		.addField('Reason', kReason);
	message.channel.send({ embed: unmute2 });
	const mutechannel = message.guild.channels.find('name', 'blcbot-log');
	if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
	mutechannel.send(unmute2);
};
module.exports.help = {
	name:'unmute',
	aliases: ['umute'],
};

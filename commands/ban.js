const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	const bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bUser) return message.channel.send('Can\'t find user!');
	const bReason = args.join(' ').slice(22);
	if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('No can do pal!');
	if(bUser.hasPermission('MANAGE_MESSAGES')) return message.channel.reply('That person can\'t be banned!');

	const banEmbed = new Discord.RichEmbed()
		.setDescription('~Ban~')
		.setColor('#bc0000')
		.addField('Banned User', `${bUser} with ID ${bUser.id}`)
		.addField('Banned By', `<@${message.author.id}> with ID ${message.author.id}`)
		.addField('Banned In', message.channel)
		.addField('Time', message.createdAt)
		.addField('Reason', bReason);

	const incidentchannel = message.guild.channels.find('name', 'blcbot-log');
	if(!incidentchannel) return message.channel.send('Can\'t find incidents channel.');
	message.guild.member(bUser).ban(bReason);
	incidentchannel.send(banEmbed);
	return;
};
module.exports.help = {
	name:'ban',
	aliases: [],
};
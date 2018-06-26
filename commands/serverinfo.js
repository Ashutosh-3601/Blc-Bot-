const Discord = require('discord.js');

module.exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setColor('#34c5db')
		.addField('Server name:<:ltick:446704973275725836>', `${message.guild.name}`)
		.addField('Server Created On:', `${message.guild.createdAt}`)
		.addField('You Joined', message.member.joinedAt)
		.addField('Server Region:', `${message.guild.region}`)
		.addField('Total members:', `${message.guild.memberCount}`)
		.addField('Humans<:discord:446702657944682508>', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots<:bottag:449231978961698836>', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.addField('Owner:', `${message.guild.owner}`)
		.addField('Bot Author', 'Ashutosh#3601')
		.setAuthor(message.guild.name, message.guild.iconURL)
		.setThumbnail(message.guild.iconURL);
	message.channel.send({ embed });
};
module.exports.help = {
	name:'serverinfo',
	aliases: ['sinfo'],
};
const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async (client, message) => {
	let user;
	if (message.mentions.users.first()) {
		user = message.mentions.users.first();
	}
	else {
		user = message.author;
	}
	// Define the member of a guild.
	const member = message.guild.member(user);
	let uuu = 0 ;
	if(user.bot === true) {
		uuu = '<a:antitick:452466581897871361>';
	}
	else {
		uuu = '<:dcross:446704972780797954>';
	}
	// Discord rich embed
	const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor(message.author.username, message.author.avatarURL)
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField('ID:', `${user.id}`, true)
		.addField('Nickname:', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
	/*	.addField('Last Message', message.member.lastMessage)
		.addField('Last Message ID', message.member.lastMessageID)*/
		.addField('Created At:', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField('Joined Server:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField('Bot:', `${uuu}`, true)
		.addField('Status:', `${user.presence.status}`, true)
		.addField('Game:', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField('Roles:', member.roles.map(roles => `<@&${roles.id}>`).join(' | '), true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL);
	message.channel.send({ embed });

};
/*	const embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setTitle('UserInfo')
		.setColor('RANDOM')
	// .setImage(message.author.avatarURL)
		.setThumbnail(message.author.avatarURL)
		.addField('AvatarURL', message.author.avatarURL, true)
		.addField('Bot', message.author.bot, true)
		.addField('Created At<:tick:446704972541984769>', message.author.createdAt, false)
		.addField('Discrimator<:nitro:446702659047522304>', message.author.discriminator, true)
	// .addField('DMChannel', message.author.dmChannel)
		.addField('ID', message.author.id)
		.addField('Last Message', message.author.lastMessage)
		.addField('Last Message ID', message.author.lastMessageID)
		.addField('Status', message.author.presence.status)
		.addField('Playing', user.presence.game.name)
		.addField('Tag', message.author.tag)
		.addField('Username', message.author.username)
		.setTimestamp();
	message.channel.send({ embed });
};*/
module.exports.help = {
	name:'userinfo',
	aliases: ['uinfo', 'whois'],
};
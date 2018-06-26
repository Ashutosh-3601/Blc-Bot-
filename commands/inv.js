const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(!args[0]) return message.channel.send(`Which Bot You Want To Invite ${message.author.username}??? Reply with \`*invite BOTNAME\``);
	const invite = message.guild.member(message.mentions.users.first()) || message.guild.members.find(g => g.user.username.toLowerCase() === args[0].toLowerCase());
	const inviter = message.author;
	if(!invite.user.bot) return message.channel.send('***DAMN! YOU CAN GET INVITE LINKS OF BOT ONLY, NOT HUMANS xD***');
	const a = invite.user.id;
	const iniv = new Discord.RichEmbed()
		.setTitle('Pro Bot Inviter™')
		.setColor('RANDOM')
		.setThumbnail(invite.user.avatarURL)
		.addField(`Invite Link For ${invite.user.username}`, `Here Is Invite Link of ${invite} BOT\n ⁍ [${invite.user.username} Invite Link](https://discordapp.com/oauth2/authorize?client_id=${a}&permissions=76865&scope=bot)`)
		.addBlankField()
		.addField('Little Warns And Notes: <:Warning:449231978751983626>', '⁍ By This Command You are Generating Invite Link For Bot!!! This doesn\'t assure that bot can be invited because \n\t-Bot May Be Private\n\t-You May not Have `Manage Servers` permissions\n ⁍ By Using This Link you are giving Bot Basic Permsisions')
		.setFooter(`Invite Requested By ${inviter.username}`, inviter.avatarURL, Date.now());
	message.channel.send(iniv);
};
module.exports.help = {
	name:'inv',
	aliases: ['invite'],
};
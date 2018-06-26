const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
	if(message.guild.me.hasPermission('MANAGE_ROLES')) {
		a = '<a:antitick:452466581897871361>';
	}
	else {
		a = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('MANAGE_MESSAGES')) {
		b = '<a:antitick:452466581897871361>';
	}
	else {
		b = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('ADMINISTRATOR')) {
		c = '<a:antitick:452466581897871361>';
	}
	else {
		c = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('KICK_MEMBERS')) {
		d = '<a:antitick:452466581897871361>';
	}
	else {
		d = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('BAN_MEMBERS')) {
		e = '<a:antitick:452466581897871361>';
	}
	else {
		e = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('MANAGE_CHANNELS')) {
		f = '<a:antitick:452466581897871361>';
	}
	else {
		f = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('MANAGE_GUILD')) {
		g = '<a:antitick:452466581897871361>';
	}
	else {
		g = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('VIEW_CHANNEL')) {
		h = '<a:antitick:452466581897871361>';
	}
	else {
		h = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
		i = '<a:antitick:452466581897871361>';
	}
	else {
		i = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('ADD_REACTIONS')) {
		j = '<a:antitick:452466581897871361>';
	}
	else {
		j = '<:dcross:446704972780797954>';
	}
	if(message.guild.me.hasPermission('EMBED_LINKS')) {
		k = '<a:antitick:452466581897871361>';
	}
	else {
		k = '<:dcross:446704972780797954>';
	}
	const perms = new Discord.RichEmbed()
		.setTitle('My PERMS')
		.setColor('RANDOM')
		.addField('**ADMINISTRATOR**', c, true)
		.addField('**MANAGE ROLES**', a, true)
		.addField('**MANAGE MESSAGES**', b, true)
		.addField('**KICK MEMBERS**', d, true)
		.addField('**BAN MEMBERS**', e, true)
		.addField('**MANAGE CHANNELS**', f, true)
		.addField('**MANAGE GUILD**', g, true)
		.addField('**VIEW CHANNEL**', h, true)
		.addField('**VIEW AUDIT LOGS**', i, true)
		.addField('**ADD REACTION**', j, true)
		.addField('**EMBED LINKS**', k, true)
		;
	message.channel.send(perms);
};
module.exports.help = {
	name: 'perms',
	aliases: [],
	description: 'Play Rock Paper Scissors with bot',
};
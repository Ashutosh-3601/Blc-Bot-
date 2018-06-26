const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
	const tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!tomute) return message.reply('Couldn\'t find user.');
	if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
	let muterole = message.guild.roles.find('name', 'BLCMuted');
	if(!muterole) {
		try{
			muterole = await message.guild.createRole({
				name: 'BLCMuted',
				color: '#000000',
				permissions:[],
			});
			message.guild.channels.forEach(async (channel) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false,
				});
			});
		}
		catch(e) {
			console.log(e.stack);
		}
	}
	const mutetime = args[1];
	if(!mutetime) return message.reply('You didn\'t specify a time!');
	let kReason = args.slice(2).join(' ');
	if(!kReason) kReason = 'No reason provided';

	await (tomute.addRole(muterole.id));
	const mute2 = new Discord.RichEmbed()
		.setTitle('Muted successfully')
		.setColor('#ce5a5d')
		.setDescription(`${tomute.user.tag} has been muted for ${ms(ms(mutetime))} `)
		.addField('Reason', kReason);
	message.channel.send({ embed: mute2 });
	const mutechannel = message.guild.channels.find('name', 'blcbot-log');
	if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
	mutechannel.send(mute2);

	setTimeout(function() {
		tomute.removeRole(muterole.id);
		const mute3 = new Discord.RichEmbed()
			.setTitle('Unmuted successfully')
			.setColor('#ce5a5d')
			.setDescription(`${tomute.user.tag} You have been unmuted after ${ms(ms(mutetime))}`);
		message.channel.send({ embed: mute3 });
		if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
		mutechannel.send(mute3);
	}, ms(mutetime));
};
module.exports.help = {
	name:'mute',
	aliases: [],
};
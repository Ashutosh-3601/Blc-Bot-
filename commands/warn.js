const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Invalid permissions!');
	const rreason = args.join(' ').slice(22);
	if(!rreason) { message.reply('Specify The Reason'); }
	const mentioned = message.mentions.members.first();
	const warn2 = new Discord.RichEmbed()
		.setTitle('Warned')
		.setColor('#ce5a5d')
		.setDescription('You have been warned, listen to the rules next time!')
		.addField('Warned By', `${message.author}`)
		.addField('Warned User', `${mentioned} with ID: ${mentioned.id}`)
		.addField('Reason', rreason);
	mentioned.send({ embed: warn2 });
	const warnchannel = message.guild.channels.find('name', 'blcbot-log');
	if(!warnchannel) return message.channel.send('Couldn\'t find reports channel.');
	message.react('446704972541984769');
	warnchannel.send(warn2);
};
module.exports.help = {
	name:'warn',
	aliases: [],
};
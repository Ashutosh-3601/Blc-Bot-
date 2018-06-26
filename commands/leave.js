const Discord = require('discord.js');
module.exports.run = (client, message) => {
	const no = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle(`You Cannot Force Me To Leave ${message.guild.name}, Unless Admin`)
		.addField('Warn <:Warning:449231978751983626>', 'This Command Is Only For Author <@316943845596200960>');
	if(message.author.id !== '316943845596200960') return message.channel.send(no);
	const leave = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle(`Preparing To Leave ${message.guild.name}`)
		.addField('Leaving', 'Thank You! Enjoyed Serving you all!');
	message.channel.send(leave);
	const guildtoleave = client.guilds.get(message.guild.id);
	guildtoleave.leave();
};
module.exports.help = {
	name:'leave',
	aliases: [],
};
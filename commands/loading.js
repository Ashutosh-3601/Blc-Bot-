const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	/* const loaded = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField('Loaded', 'Components Loaded');*/
	const load = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField('Loading', 'Loading Essential Components')
		.setThumbnail('https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif');
	const k = await message.channel.send(load);
	const time = '40000';
	setTimeout(function() {
		const loaded = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setThumbnail('https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif')
			.addField('**Loaded Successfully**', 'Essential Components Loaded');
		k.edit(loaded);
	}, (time));
};
module.exports.help = {
	name: 'loading',
	aliases: [],
	description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
	usage: 'lockdown <duration>',
};
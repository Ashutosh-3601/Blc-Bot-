const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	const topic = args.slice(0).join(' ');
	if(!topic) return message.reply('SPECIFY TOPIC');
	const embedt = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor('RANDOM')
		.setThumbnail('https://cdn.dribbble.com/users/891352/screenshots/2158819/yes_no_tick_blue_dribbble.gif')
		.setTitle('POLL')
		.addField('Topic', topic)
		.addField('Poll Created At', message.createdAt)
		.setTimestamp();
	const msg = await message.channel.send(embedt);
	msg.react('446704973628309515')
		.then(() => msg.react('446704973745618944'))
		.then(() => msg.react('446704974970224651'))
		.catch(() => console.error('One of the emojis failed to react.'));
	message.delete().catch();
};
module.exports.help = {
	name:'poll',
	aliases: [],
};
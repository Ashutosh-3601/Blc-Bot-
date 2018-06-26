const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(!message.member.hasPermission('MANAGE_MESSAGES') || message.author.id !== '316943845596200960') return message.channel.send('Invalid Permission Nodes');
	const role = message.guild.roles.find('name', '@everyone');
	message.channel.overwritePermissions(role, {
		SEND_MESSAGES: false,
		READ_MESSAGES: false,
	});
	const uloock = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail('https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif')
		.addField('Channel Hiden', 'Channel Is Now Hiden For Everyone\n\n\n ');
	message.channel.send(uloock);
};
module.exports.help = {
	name:'hide',
	aliases: [],
};
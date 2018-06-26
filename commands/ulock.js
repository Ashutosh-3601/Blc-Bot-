const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	if(!message.member.hasPermission('MANAGE_MESSAGES') || message.author.id !== '316943845596200960') return message.channel.send('Invalid Permission Nodes');
	const role = message.guild.roles.find('name', '@everyone');
	message.channel.overwritePermissions(role, {
		SEND_MESSAGES: null,
		READ_MESSAGES: null,
	});
	const uloock = new Discord.RichEmbed()
		.setColor('RANDOM')
	//	.setThumbnail('https://media0.giphy.com/media/50OAJNulFBBrq/giphy.gif')
		.setThumbnail('https://cdn.discordapp.com/attachments/446702452008419340/458712442097238047/tumblr_nrecy93dpQ1rpb2rfo1_500.gif')
		.addField('Channel UnLocked', 'Channel Is Now UnLocked For Everyone\n\n\n ');
	message.channel.send(uloock);
};
module.exports.help = {
	name:'ulock',
	aliases: ['unlock'],
};
const Discord = require('discord.js');

module.exports.run = async (client, message) => {
	let invitess = await message.guild.fetchInvites().catch(error => {
		console.log(error);
		return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
	});

	invitess = invitess.array();

	const possibleinvites = [];
	invitess.forEach(function(invites) {
		possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`);
	});

	const embed = new Discord.RichEmbed()
		.setTitle('**INVITE LEADERBOARD**')
		.setColor(0xCB5A5E)
		.addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
		.setTimestamp();
	message.channel.send(embed);
};

module.exports.help = {
	name: 'invitestats',
	aliases: [],
};
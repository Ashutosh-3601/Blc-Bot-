const Discord = require('discord.js');
module.exports.run = (client, message) => {
	if(message.author.id !== '316943845596200960') return;
	const guess = '2311';
	const looock = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail('https://media.giphy.com/media/l0MYFc97XX3soIEak/giphy.gif')
		.addField('Channel Locked', 'Channel Is Locked Until Further Events.');
	const embedq = new Discord.RichEmbed()
		.setTitle('Guess And Win')
		.setColor('RANDOM')
		.addField(`**Started Game In **${message.guild.name}`, '**Guess And Win Started**')
		.addField('How To Play', '**Guess The Random Number Which Is Between `0 and 10000`; And Win**');
	message.channel.send(embedq);
	message.channel.awaitMessages(msgs => {
		if(msgs.content > 10000) {
			msgs.reply('Ah!, Seems Like You Didn\'t Read Rules Properly. **THE NUMBER IS BETWEEN 0-10000**');
		}
		if (msgs.content == guess) {
			const winner = msgs.author;
			const ahkkEmbed = new Discord.RichEmbed()
				.setTitle('Congrats')
				.setColor('RANDOM')
				.setThumbnail('https://media2.giphy.com/media/26BkNituin1dca6GI/giphy.gif')
				.addField('Correct Number Guessed', `Congrats ${winner}, you guessed Correct Number`)
				.addField('The Number Was', `**${guess}**`);
			//	.setImage('https://media2.giphy.com/media/26BkNituin1dca6GI/giphy.gif');
			message.channel.send(ahkkEmbed);
			const role = message.guild.roles.find('name', '@everyone');
			message.channel.overwritePermissions(role, {
				SEND_MESSAGES: false,
				READ_MESSAGES: true,
			});
			message.channel.send(looock);
			return;
		}
	});
};

module.exports.help = {
	name: 'quiz',
	aliases: ['event'],
	description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
	usage: 'lockdown <duration>',
};
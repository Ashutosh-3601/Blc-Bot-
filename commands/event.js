const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	const guess = '1111';
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
	const filter = m => m.content;
	const collector = message.channel.createMessageCollector(filter);
	collector.on('collect', m => {
		if(m.content > 10000) {
			m.reply('Ah!, Seems Like You Didn\'t Read Rules Properly. **THE NUMBER IS BETWEEN 0-10000**');
		}
		if (m.content == guess) {
			const winner = m.author;
			const ahkkEmbed = new Discord.RichEmbed()
				.setTitle('Congrats')
				.setColor('RANDOM')
				.setThumbnail('https://media2.giphy.com/media/26BkNituin1dca6GI/giphy.gif')
				.addField('Correct Number Guessed', `Congrats ${winner}, you guessed Correct Number`)
				.addField('The Number Was', `**${guess}**`);
			//	.setImage('https://media2.giphy.com/media/26BkNituin1dca6GI/giphy.gif');
			message.channel.send(ahkkEmbed)
				.then(() => collector.stop());

			const role = message.guild.roles.find('name', '@everyone');
			message.channel.overwritePermissions(role, {
				SEND_MESSAGES: false,
				READ_MESSAGES: true,
			});
			message.channel.send(looock);
		}
	});
	collector.on('end', collected => {
		console.log(`Collected ${collected.size} items`);
		message.channel.send(`**Good Guessing Guys.. There were ${collected.size} attempts**`);
	});
/*	const role = message.guild.roles.find('name', '@everyone');
	message.channel.overwritePermissions(role, {
		SEND_MESSAGES: false,
		READ_MESSAGES: true,
	});
	message.channel.send(looock);*/
};
module.exports.help = {
	name:'events',
	aliases: [],
};
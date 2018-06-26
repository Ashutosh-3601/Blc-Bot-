const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(!args[0] && !args[1] && !args[2] && !args[3]) return message.channel.send('Please Add Limit and guess; `*gcevent <lowerlimit> <upperlimit> <guess> <channel name(dont include # in name of channel)>`');
	const LL = parseInt(args[0]);
	const UL = parseInt(args[1]);
	const guess = parseInt(args[2]);
	const Channel = message.guild.channels.find('name', `${args[3]}`);
	if(isNaN(args[0])) return message.channel.send('Lower Limit Is not a valid number');
	if(isNaN(args[1])) return message.channel.send('Upper Limit Is not a valid number');
	if(isNaN(args[2])) return message.channel.send('Guess Is not a valid number');
	if(guess > UL) return message.channel.send('What? __You are setting guess number above your upperlimit__ xD');
	if(!Channel) return message.channel.send('Seems Like I Don\'t Have Permission To View That Channel Or Missing Channel');
	const looock = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail('https://cdn.discordapp.com/attachments/446702452008419340/458712347083800576/d3399b44559275.581664f32cd8a.gif')
		.addField('Channel Locked', 'Channel Is Locked Until Further Events.');
	const embedq = new Discord.RichEmbed()
		.setDescription('**Guess The Number** :1234:')
		.setColor('RANDOM')
		.addField('**How To Play**', `Guess The Random Number Which Is Between \`${LL} and ${UL}\` And Win Amazing Prizes`)
		.setFooter(message.guild.name, message.guild.iconURL);
	await Channel.send(embedq);
	Channel.setTopic(`Yeahhhhhhh!!! Running Event - **Guess The Number & Win A Prize**. Number is between ${LL}-${UL}.\n⁍ DONT SEND MESSAGES HERE!`);
	message.react('452466581897871361');
	message.delete(5000);
	const filter = m => m.content;
	const collector = Channel.createMessageCollector(filter);
	collector.on('collect', m => {
		if(m.content > UL || m.content < LL) {
			m.delete();
			m.reply(`Ah!, Seems Like You Didn't Read Rules Properly. **THE NUMBER IS BETWEEN ${LL}-${UL}**`).then(k => k.delete(5000));
		}
		if(m.author.id == 316943845596200960 && m.content == 'stop') {
			collector.stop();
			Channel.send('Successfully stopped the event');
			const role = message.guild.roles.find('name', '@everyone');
			Channel.overwritePermissions(role, {
				SEND_MESSAGES: false,
				READ_MESSAGES: true,
			});
			Channel.send(looock).then(Channel.setTopic('Not Running Event Right Now.\n⁍ <:gclinkdblue:446759256633376769> Keep Supporting Us By donating to make events more frequent.'));
			return;
		}
		if (m.content == guess) {
			const winner = m.author;
			const ahkkEmbed = new Discord.RichEmbed()
				.setTitle('Congrats')
				.setColor('RANDOM')
				.setThumbnail('https://media.discordapp.net/attachments/446702452008419340/458712231660617759/gift-3.gif?width=470&height=352')
				.addField('Correct Number Guessed', `Congrats ${winner}, you guessed Correct Number`)
				.addField('The Number Was', `**${guess}**`);
			Channel.send(ahkkEmbed)
				.then(() => collector.stop());

			const role = message.guild.roles.find('name', '@everyone');
			Channel.overwritePermissions(role, {
				SEND_MESSAGES: false,
				READ_MESSAGES: true,
			});
			Channel.send(looock).then(Channel.setTopic('Not Running Event Right Now.\n⁍ <:gclinkdblue:446759256633376769> Keep Supporting Us By donating to make events more frequent.'));
		}
	});
	collector.on('end', collected => {
		console.log(`Collected ${collected.size} items`);
		Channel.send(`**Good Guessing Guys.. There were ${collected.size} attempts**`);
	});
/*	const role = message.guild.roles.find('name', '@everyone');
	message.channel.overwritePermissions(role, {
		SEND_MESSAGES: false,
		READ_MESSAGES: true,
	});
	message.channel.send(looock);*/
};
module.exports.help = {
	name:'gcevents',
	aliases: [],
};
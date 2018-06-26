const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(!args[0]) return message.channel.send('** I KNOW YOU YOURSELF!!! MENTION OR WRITE YOUR CRUSH NAME TO CHECK WITH OTHERS**');
	let u1 = 0, u2 = 0;
	if(!args[1]) {
		u1 = message.author;
		u2 = args[0];
	}
	else {
		u1 = args[0];
		u2 = args[1];
	}
	const answers = [
		'10%, no way man',
		'25% This could work out, just be careful',
		'10%, no way man',
		'200% This is the best match ive ever seen!! Wow!!!',
		'25% This could work out, just be careful',
		'10%, no way man',
		'200% This is the best match ive ever seen!! Wow!!!',
		'25% This could work out, just be careful',
		'10%, no way man',
		'25% This could work out, just be careful',
		'10%, no way man',
		'200% This is the best match ive ever seen!! Wow!!!',
		'200% This is the best match ive ever seen!! Wow!!!',
		'25% This could work out, just be careful',
		'50% I wish you luck, this is both good and bad',
		'50% I wish you luck, this is both good and bad',
		'50% I wish you luck, this is both good and bad',
		'50% I wish you luck, this is both good and bad',
		'25% This could work out, just be careful',
		'90.09099% Great Match!! Go For it!!!',
		'75% This could work! Go For it!',
		'75% This could work! Go For it!',
		'75% This could work! Go For it!',
		'75% This could work! Go For it!',
		'75% This could work! Go For it!',
		'75% This could work! Go For it!',
		'200% This is the best match ive ever seen!! Wow!!!',
		'10%, no way man',
		'25% This could work out, just be careful',
		'10%, no way man',
		'25% This could work out, just be careful',
	];
	const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	const love = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail('https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif')
		.setTitle('**LOVETEST RESULTS**')
		.setDescription(`LOVE BETWEEN\n${u1} and ${u2}\n**${randomAnswer}**`)
		.setTimestamp(new Date())
		.setFooter('© BLC MOD™');
	const a = await message.channel.send(love);
	a.react('401653374069506048');
	/* message.channel.send({ embed: { color: 10834749,
		fields:[{ name: 'love', value: mss + randomAnswer } ],
		timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: '© DeathBot' } } });

*/
};
module.exports.help = {
	name: 'love',
	aliases: [], description: 'Calculates compatability.',
};
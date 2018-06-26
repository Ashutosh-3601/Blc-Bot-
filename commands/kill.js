const { RichEmbed } = require('discord.js');
exports.run = async (client, message) => {
	const no = new RichEmbed()
		.setColor('RANDOM')
		.setDescription('You **CANNOT SHUTDOWN** bot');
	if(message.author.id !== '316943845596200960') return message.channel.send(no);
	const embed = new RichEmbed()
		.setColor('#ff1d00')
		.setTitle('Bot is shutting down!');
	await message.channel.send(embed);
	client.commands.forEach(async cmd => {
		await client.unloadCommand(cmd);
		console.log(`${cmd} unloaded`);
	});
	process.exit(1);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['boot off', 'shutdown'],
	permLevel: 'Bot Admin',
};

exports.help = {
	name: 'kill',
	aliases: ['boot off', 'shutdown'],
	category: 'Owner',
	description: 'Shuts down the bot, unless running under pm2 or on an VPN/VPS bot will reboot automatically',
	usage: 'reboot',
};
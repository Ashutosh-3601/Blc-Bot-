const Discord = require('discord.js');

module.exports.run = async (client, message) => {
	let totalSeconds = (Math.floor(client.uptime / 1000));
	const hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	const uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
	const bicon = client.user.displayAvatarURL;
	const os = require('os');
	const mm = `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`;
	const botembed = new Discord.RichEmbed()
		.setColor('#821ae4')
		.setDescription('Bot Information')
		.setThumbnail(bicon)
		.addField('Bot Name', `${message.client.user.username}`, true)
		.addField('Bot Version', '1.00', true)
		.addField('Bot Author', 'Ashutosh#3601', true)
		.addField('Created On', client.user.createdAt, true)
		.addField('Operating System', `${os.platform()} `, true)
		.addField('Arch', os.arch(), true)
	//	.addField('Model', os.model, true)
		.addField('Memory Usage', mm, true)
		// .addField('Bot Joined Server On', client.user.joinedAt, true)
		.addField('Process Version (Node) <:nodejswhite:383672503706583041>', process.version, true)
		.addField('Library - Discord.js Version <:discordjs:383675043567108097>', Discord.version, true)
		.addField('Bot Invite Link', '[Invite](https://discordapp.com/api/oauth2/authorize?client_id=443789227377950720&permissions=8&scope=bot)', true)
		.addField('My Server Invite', '[Bonded LawBreaking Community](https://discord.gg/Vyg8aT8)', true)
		.addField('Bot Uptime', `${uptime}`, true);
	message.channel.send(botembed);
};

module.exports.help = {
	name:'botinfo',
	aliases: ['binfo', 'info'],
};
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(!args[0]) return message.channel.send('<:tom:454272932751998986> ***I think You forgot To mention or write name user you want to kick!!***<:dcross:446704972780797954>');
	if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':lock: You Are lacking The following Permission: ```cs\n#> KICK MEMBERS```');
	const kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.find(g => g.user.username.toLowerCase() === args[0].toLowerCase());
	if(!kUser) return message.channel.send('Can\'t find user!');
	let kReason = args.join(' ').slice(22);
	if(!kReason) kReason = 'No reason provided';
	if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('Oh! I am Are lacking The following Permission: ```cs\n#> KICK MEMBERS```');
	if(kUser.id == message.author.id)return message.channel.send('***Why Don\'t you use Leave Button?***');
	if(kUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('That person can\'t be kicked!');

	const kickEmbed = new Discord.RichEmbed()
		.setDescription('__**Kick**__')
		.setColor('#e56b00')
		.addField('Kicked User', `${kUser} with ID ${kUser.id}`)
		.addField('Kicked By', `<@${message.author.id}> with ID ${message.author.id}`)
		.addField('Kicked In', message.channel)
		.addField('Time', message.createdAt)
		.addField('Reason', kReason);

	const kickChannel = message.guild.channels.find('name', 'blcbot-log');
	if(!kickChannel) message.channel.send('Can\'t find incidents channel.');
	message.guild.member(kUser).kick(kReason);
	message.reply(`<a:antitick:452466581897871361>*** ${kUser.user.tag} has been kicked by ${message.author.tag} because: ${kReason}***`);
	kickChannel.send(kickEmbed);

	return;
};
module.exports.help = {
	name:'kick',
	aliases: [],
};
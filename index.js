const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./botconfig.json');
const fs = require('fs');
// const Canvas = require('canvas');
// const snekfetch = require('snekfetch');
client.login(token);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {

	if(err) console.log(err);
	const jsfile = files.filter(f => f.split('.').pop() === 'js');
	if(jsfile.length <= 0) {
		console.log('Couldn\'t find commands.');
		return;
	}

	jsfile.forEach((f) =>{
		const props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		client.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		});
	});
});


client.on('ready', () => {
	console.log('Ready!');
	setInterval(function() {
		client.user.setPresence({ status: 'online', game: { name: 'BLC™ Members/ Ashutosh#3601 ', type: 3, url: 'https://discord.gg/Vyg8aT8' } });
		client.user.setPresence({ status: 'online', game: { name: `*help |${client.users.size} Talks | Ashutosh#3601 `, type: 2, url: 'https://discord.gg/Vyg8aT8' } });
	}, 9000);
});
client.on('messageDelete', async (message) => {
	if(message.guild.id == '343572980351107077') return;
	const logs = message.guild.channels.find('name', 'blcbot-log');
	if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
		message.guild.createChannel('blcbot-log', 'text');
	}
	if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
		console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions');
	}
	const entry = await message.guild.fetchAuditLogs({ type: 'MESSAGE_DELETE' }).then(audit => audit.entries.first());
	let user = '';
	if (entry.extra.channel.id === message.channel.id
		&& (entry.target.id === message.author.id)
		&& (entry.createdTimestamp > (Date.now() - 5000))
		&& (entry.extra.count >= 1)) {
		user = entry.executor.username;
	}
	else {
		user = message.author.username;
	}
	const Logger = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setDescription('Logger')
		.addField('Action', '**MESSAGE DELETE**')
		.addField('Moderator', user)
		.addField('Channel', message.channel.name)
		.setFooter('By BLC MOD™ | v 1.0');
	logs.send(Logger);
});
client.on('messageReactionAdd', (messageReaction, user) =>{
	if (messageReaction.message.guild.id != '446702452008419338') return;
	const message = messageReaction.message.guild.messages.get('460405106568069120');
	const Role = messageReaction.message.guild.roles.find('name', 'UPRISE™');
	const filter = (reaction) => {
		reaction.emoji.name === '👌' && user === message.author.id;
	};
	message.awaitReactions(filter,
		messageReaction.user.addRole(Role)
	);
});
/* client.on('channelCreate', channel => {
	const logs = channel.guild.channels.find('name', 'blcbot-log');
	if (channel.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
		channel.guild.createChannel('blcbot-log', 'text');
	}
	if (!channel.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
		console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions');
	}
	const entry = channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
	// const user1 = '';
	console.log(entry.executor);*/
/*	if (entry.extra.channel.id === channel.id
		&& (entry.target.id === channel.author.id)
		&& (entry.createdTimestamp > (Date.now() - 5000)) {*/
/*	user1 = entry.user.username;

	const Logger = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setDescription('Logger')
		.addField('Action', '**CHANNEL CREATE**')
		.addField('Executor(Channel Created By)', user1)
		.addField('Channel', channel.name)
		.addField('Channel Type', entry.target.type)
		.addField('Created Channel Id', entry.target.id)
		.addField('Is Channel NSFW?', entry.target.nsfw)
		.setFooter('By BLC MOD™ | v 1.0');
	logs.send(Logger);*/
// });
client.on('guildMemberAdd', member => {
	if(member.guild.id == 433203711226019841) {
		member.guild.channels.get('449910833410080788').setName(`ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ : ${member.guild.memberCount}`);
		const humans = member.guild.members.filter(m => !m.user.bot).size;
		member.guild.channels.get('449911054915600384').setName(`ᴍᴇᴍʙᴇʀ ᴄᴏᴜɴᴛ: ${humans}`);
		const bots = member.guild.members.filter(m => m.user.bot).size;
		member.guild.channels.get('449911093565849660').setName(`Bᴏᴛ Cᴏᴜɴᴛ: ${bots}`);
		const TextC = member.guild.channels.filter(c => c.type === 'text').size;
		member.guild.channels.get('449972678581944321').setName(`ᴛᴇxᴛ ᴄʜᴀɴɴᴇʟꜱ: ${TextC}`);
		const Voice = member.guild.channels.filter(c => c.type === 'voice').size;
		member.guild.channels.get('449972706809741333').setName(`ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟꜱ: ${Voice}`);
	}
	else if(member.guild.id == 354876074770956290) {
		const welcome = member.guild.channels.find('id', '443160677658525696');
		if(!welcome) return;
		const welcom = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription('<a:antitick:452466581897871361> New Member joined')
			.addField('Member', member)
			.addField('Joined At', member.joinedAt);
		welcome.send(welcom);
	}
	if(member.guild.id == 449867687674380288) {
		member.guild.channels.get('449867687674380292').setName(`ᴛᴏᴛᴀʟ ᴜꜱᴇʀꜱ : ${member.guild.memberCount}`);
		const humans = member.guild.members.filter(m => !m.user.bot).size;
		member.guild.channels.get('450548856162222100').setName(`ᴍᴇᴍʙᴇʀ ᴄᴏᴜɴᴛ: ${humans}`);
		const bots = member.guild.members.filter(m => m.user.bot).size;
		member.guild.channels.get('450548978048827392').setName(`Bᴏᴛ Cᴏᴜɴᴛ: ${bots}`);
		const TextC = member.guild.channels.filter(c => c.type === 'text').size;
		member.guild.channels.get('450556207573237760').setName(`ᴛᴇxᴛ ᴄʜᴀɴɴᴇʟꜱ: ${TextC}`);
		const Voice = member.guild.channels.filter(c => c.type === 'voice').size;
		member.guild.channels.get('450556282810662922').setName(`ᴠᴏɪᴄᴇ ᴄʜᴀɴɴᴇʟꜱ: ${Voice}`);
	}
	process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));
});
client.on('message', async message => {
	if (message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	if(message.channel.type === 'dm') return message.channel.send('**INVITE ME TO GUILD FIRST**');
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	// const commandfile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
	// if (commandfile) commandfile.run(client, message, args);
	try {
		const commandFile = require(`./commands/${command}.js`)
			|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
		commandFile.run(client, message, args);
	}
	catch (err) {
		console.error(err);
	}

	if(command === 'ping') {
		const m = await message.channel.send('Ping? WAIT WHILE I CHECK');
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.\n API Latency is ${Math.round(client.ping)}ms`);
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop...Boop.:robot::smile:   I Am Alive And Moderating BLC™ Carefully');
	}
	if(message.content === `${prefix}react`) {

		message.react('✅');
	}
	// if(!commandfile) {return message.channel.send('**OOPS! No Command With That Spell Found**');}

/*	if (command == 'warn') {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Invalid permissions!');
		const rreason = args.join(' ').slice(22);
		if(!rreason) { message.reply('Specify The Reason'); }
		const mentioned = message.mentions.members.first();
		const warn2 = new Discord.RichEmbed()
			.setTitle('Warned')
			.setColor('#ce5a5d')
			.setDescription('You have been warned, listen to the rules next time!')
			.addField('Warned By', `${message.author}`)
			.addField('Warned User', `${mentioned} with ID: ${mentioned.id}`)
			.addField('Reason', rreason);
		mentioned.send({ embed: warn2 });
		const warnchannel = message.guild.channels.find('name', 'blcbot-log');
		if(!warnchannel) return message.channel.send('Couldn\'t find reports channel.');
		message.react('446704972541984769');
		warnchannel.send(warn2);
	}
	/*	let totalSeconds = (Math.floor(client.uptime / 1000));
	const hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	const uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
	if (message.content === `${prefix}botinfo`) {
		const embed = new Discord.RichEmbed()
			.setColor('#821ae4')
			.addField('Bot Name', `${message.client.user.username}`)
			.addField('Bot Version', '1.00')
			.addField('Bot Author', 'Ashutosh#3601')
			.addField('Created On', client.user.createdAt)
			.addField('Bot Joined Server On', `${message.createdAt}`)
			.addField('Bot Invite Link', '[Invite](https://discordapp.com/api/oauth2/authorize?client_id=443789227377950720&permissions=8&scope=bot)')
			.addField('My Server Invite', '[Bonded LawBreaking Community](https://discord.gg/Vyg8aT8)')
			.addField('Bot Uptime', `${uptime}`);
		message.channel.send({ embed });
	}*/
/*	if (message.content === `${prefix}serverinfo`) {
		const embed = new Discord.RichEmbed()
			.setColor('#34c5db')
			.addField('Server name:', `${message.guild.name}`)
			.addField('Total members:', `${message.guild.memberCount}`)
			.addField('Server Created On:', `${message.guild.createdAt}`)
			.addField('You Joined', message.member.joinedAt)
			.addField('Server Region:', `${message.guild.region}`)
			.addField('Owner:', `${message.guild.owner}`)
			.addField('Bot Author', 'Ashutosh#3601')
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setThumbnail(message.guild.iconURL);
		message.channel.send({ embed });
	}
	if (message.content === `${prefix}userinfo`) {
		const embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setTitle('UserInfo')
			.setColor('RANDOM')
			// .setImage(message.author.avatarURL)
			.setThumbnail(message.author.avatarURL)
			.addField('Ping', `${message.author.client.ping} ms`)
			.addField('AvatarURL', message.author.avatarURL, true)
			.addField('Bot', message.author.bot, true)
			.addField('Created At<:tick:446704972541984769>', message.author.createdAt, false)
			.addField('Discrimator<:nitro:446702659047522304>', message.author.discriminator, true)
			// .addField('DMChannel', message.author.dmChannel)
			.addField('ID', message.author.id)
			.addField('Last Message', message.author.lastMessage)
			.addField('Last Message ID', message.author.lastMessageID)
			.addField('Status', message.author.presence.status)
			.addField('Tag', message.author.tag)
			.addField('Username', message.author.username)
			.addField('Roles', message.author.roles)
			.addField('Permissions', message.author.hasPermission)
			.setTimestamp();
		message.channel.send({ embed });
	}
	/*	if (command === 'mute') {
		if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid Permissions !');
		const member = message.mentions.members.first();
		if (!member) return message.reply('You havenot specified a user. Whom Should I Mute?!');
		const muteRole = message.guild.roles.find('name', 'BLCMuted');
		if (!muteRole) return message.reply('No role called BLCMuted has been found!');
		const time = args[1];
		if (!time) return message.reply('No time has been specified.');
		member.addRole(muteRole.id).catch(console.error);
		const mute2 = new Discord.RichEmbed()
			.setTitle('Muted successfully')
			.setColor('#ce5a5d')
			.setDescription(`${member.user.tag} has been muted for ${ms(ms(time))} `);
		message.channel.send({ embed: mute2 });


		setTimeout(function() {
			member.removeRole(muteRole.id);
			const mute3 = new Discord.RichEmbed()
				.setTitle('Unmuted successfully')
				.setColor('#ce5a5d')
				.setDescription(`${member.user.tag} You have been unmuted after ${ms(ms(time))}`);
			message.channel.send({ embed: mute3 });
		}, ms(time));
	}*/
/*	if(command === 'mute') {
	//	if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
		const tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!tomute) return message.reply('Couldn\'t find user.');
		if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
		// if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send('No can do pal!');
		let muterole = message.guild.roles.find('name', 'BLCMuted');
		if(!muterole) {
			try{
				muterole = await message.guild.createRole({
					name: 'BLCMuted',
					color: '#000000',
					permissions:[],
				});
				message.guild.channels.forEach(async (channel) => {
					await channel.overwritePermissions(muterole, {
						SEND_MESSAGES: false,
						ADD_REACTIONS: false,
					});
				});
			}
			catch(e) {
				console.log(e.stack);
			}
		}
		const mutetime = args[1];
		if(!mutetime) return message.reply('You didn\'t specify a time!');
		let kReason = args.slice(2).join(' ');
		if(!kReason) kReason = 'No reason provided';

		await (tomute.addRole(muterole.id));
		const mute2 = new Discord.RichEmbed()
			.setTitle('Muted successfully')
			.setColor('#ce5a5d')
			.setDescription(`${tomute.user.tag} has been muted for ${ms(ms(mutetime))} `)
			.addField('Reason', kReason);
		message.channel.send({ embed: mute2 });
		const mutechannel = message.guild.channels.find('name', 'blcbot-log');
		if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
		mutechannel.send(mute2);

		setTimeout(function() {
			tomute.removeRole(muterole.id);
			const mute3 = new Discord.RichEmbed()
				.setTitle('Unmuted successfully')
				.setColor('#ce5a5d')
				.setDescription(`${tomute.user.tag} You have been unmuted after ${ms(ms(mutetime))}`);
			message.channel.send({ embed: mute3 });
			if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
			mutechannel.send(mute3);
		}, ms(mutetime));
	}
	if(command == 'unmute') {
		if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Invalid permissions!');
		const member = message.mentions.members.first();
		if (!member) return message.reply('you haven\'t specified a user!');
		const muteRole = message.guild.roles.find('name', 'BLCMuted');
		let kReason = args.slice(2).join(' ');
		if(!kReason) kReason = 'No reason provided';
		if(!member.roles.has(muteRole.id)) return message.reply('They don\'t have that role.');
		await (member.removeRole(muteRole.id)).catch(console.error);
		const unmute2 = new Discord.RichEmbed()
			.setTitle('Unmuted successfully')
			.setColor('#ce5a5d')
			.setDescription(`You have been unmuted, ${member.user.tag}, sorry for the inconvinience!`)
			.addField('Reason', kReason);
		message.channel.send({ embed: unmute2 });
		const mutechannel = message.guild.channels.find('name', 'blcbot-log');
		if(!mutechannel) return message.channel.send('Couldn\'t find logs channel.');
		mutechannel.send(unmute2);

	}
	if(message.content === `${prefix}credits`) {
		const embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setTitle('BLc MOD™ CREDITS')
			.setColor('RANDOM')
			.addField('Main Author', 'Ashutosh#3601<:nitro:446702659047522304>')
			.addField('Helpers :hearts:', '✩Gαﾚαxψ✩*)#8716<:discord:446702657944682508>\nSai Chinna#6718<:discord:446702657944682508>')
			.setThumbnail(client.avatarURL);
		message.channel.send({ embed });

	}
	if (message.content === `${prefix}help`) {
		const embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setTitle('BLC MOD™ Help - Bot Only For MODERATORS<:nitro:446702659047522304>')
			.setColor('RANDOM')
			.addField('Prefix', '`*`')
			.addField('MOD HELP', '`ban`,`kick`,`mute`,`prune`,`report`, `more coming soon`')
			.addField('GENERAL', '`ping`,`credits`,`botinfo`,`serverinfo`,`beep`, `react`,`say`,`avatar`')
			.addField('My All Links', '[Invite](https://discordapp.com/api/oauth2/authorize?client_id=443789227377950720&permissions=8&scope=bot) | [Bonded LawBreaking Community](https://discord.gg/Vyg8aT8)');
		const msg = await message.channel.send(embed);
		msg.react('446704973275725836');

	}
	if(command === 'say') {
		const sayMessage = args.join(' ');
		message.delete().catch();
		message.channel.send(sayMessage);
	}
	if(command === 'avatar') {
		message.reply(message.author.avatarURL);

	}
	/* if(command === 'kick') {
		if(!message.member.roles.some(r=>['Administration', 'Moderator Club'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
		const member = message.mentions.members.first(2) || message.guild.members.get(args[0]);
		if(!member) {return message.reply('Please mention a valid member of this server');}
		if(!member.kickable) {return message.reply('I cannot kick this user! Do they have a higher role? Do I have kick permissions?');}
		let reason = args.slice(1).join(' ');
		if(!reason) reason = 'No reason provided';
		await member.kick(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
	}*/
/*	if(command === 'poll') {
		const topic = args.slice(0).join(' ');
		if(!topic) return message.reply('SPECIFY TOPIC');
		const embedt = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setColor('RANDOM')
			.setThumbnail('https://cdn.dribbble.com/users/891352/screenshots/2158819/yes_no_tick_blue_dribbble.gif')
			.setTitle('POLL')
			.addField('Topic', topic)
			.addField('Poll Created At', message.createdAt)
			.setTimestamp();
		const msg = await message.channel.send(embedt);
		msg.react('446704973628309515')
			.then(() => msg.react('446704973745618944'))
			.then(() => msg.react('446704974970224651'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}

	if(command === 'prune') {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Invalid permissions!');
		const amount = parseInt(args[0]);
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount < 2 || amount > 100) {
			return message.reply('you need to input a number between 2 and 100.');
		}
		message.channel.bulkDelete(amount);
	}
	if(command === 'report') {
		const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!rUser) return message.channel.send('Couldn\'t find user.');
		const rreason = args.join(' ').slice(22);
		const reportEmbed = new Discord.RichEmbed()
			.setDescription('Reports')
			.setColor('#15f153')
			.addField('Reported User', `${rUser} with ID: ${rUser.id}`)
			.addField('Reported By', `${message.author} with ID: ${message.author.id}`)
			.addField('Channel', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', rreason);

		const reportschannel = message.guild.channels.find('name', 'blcbot-log');
		if(!reportschannel) return message.channel.send('Couldn\'t find reports channel.');
		message.delete().catch(error => message.reply(`Report Error ${error}`));
		reportschannel.send(reportEmbed);
		return;
	}
	if(command === 'ban') {
		const bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!bUser) return message.channel.send('Can\'t find user!');
		const bReason = args.join(' ').slice(22);
		if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send('No can do pal!');
		if(bUser.hasPermission('MANAGE_MESSAGES')) return message.channel.reply('That person can\'t be banned!');

		const banEmbed = new Discord.RichEmbed()
			.setDescription('~Ban~')
			.setColor('#bc0000')
			.addField('Banned User', `${bUser} with ID ${bUser.id}`)
			.addField('Banned By', `<@${message.author.id}> with ID ${message.author.id}`)
			.addField('Banned In', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', bReason);

		const incidentchannel = message.guild.channels.find('name', 'blcbot-log');
		if(!incidentchannel) return message.channel.send('Can\'t find incidents channel.');
		message.guild.member(bUser).ban(bReason);
		incidentchannel.send(banEmbed);
		return;
	}
	if(command === 'kick') {
		const kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!kUser) return message.channel.send('Can\'t find user!');
		let kReason = args.join(' ').slice(22);
		if(!kReason) kReason = 'No reason provided';
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No can do pal!');
		if(kUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('That person can\'t be kicked!');

		const kickEmbed = new Discord.RichEmbed()
			.setDescription('~Kick~')
			.setColor('#e56b00')
			.addField('Kicked User', `${kUser} with ID ${kUser.id}`)
			.addField('Kicked By', `<@${message.author.id}> with ID ${message.author.id}`)
			.addField('Kicked In', message.channel)
			.addField('Tiime', message.createdAt)
			.addField('Reason', kReason);

		const kickChannel = message.guild.channels.find('name', 'blcbot-log');
		if(!kickChannel) return message.channel.send('Can\'t find incidents channel.');
		message.guild.member(kUser).kick(kReason);
		message.reply(`${kUser.user.tag} has been kicked by ${message.author.tag} because: ${kReason}`);
		kickChannel.send(kickEmbed);

		return;
	}
	if(command === 'restart') {
		if (message.author.id === '316943845596200960') {
			message.reply('RESTARTING BOT');
			process.exit();
		}
		else { message.reply('INVALID PERMS.. **AUTHOR ONLY** COMMAND'); }
	}

//			.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	/* if(command === 'ban') {
		if(!message.member.roles.some(r=>['Administration'].includes(r.name))) { return message.reply('Sorry, you don\'t have permissions to use this!'); }

		const member = message.mentions.members.first(2);
		if(!member) {return message.reply('Please mention a valid member of this server');}
		if(!member.bannable) {return message.reply('I cannot ban this user! Do they have a higher role? Do I have ban permissions?');}
		let reason = args.slice(1).join(' ');
		if(!reason) reason = 'No reason provided';

		await member.ban(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
		message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
	}*/

});
client.login('');

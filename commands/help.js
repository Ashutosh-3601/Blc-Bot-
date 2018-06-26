const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setTitle('BLC MOD™ Help - Bot Specially For MODERATORS <:nitro:446702659047522304>')
			.setColor('RANDOM')
			.addField('Prefix', '`*`')
			.addField('MOD HELP', '`ban`,`kick`,`mute`,`prune`,`report`, `more coming soon`')
			.addField('GENERAL', '`ping`,`credits`,`botinfo`,`serverinfo`,`beep`, `react`,`say`,`avatar`')
			.addField('My All Links', '[Invite](https://discordapp.com/api/oauth2/authorize?client_id=443789227377950720&permissions=8&scope=bot) | [Bonded LawBreaking Community](https://discord.gg/Vyg8aT8)');
		const msg = await message.channel.send(embed);
		msg.react('446704973275725836');
	}
	else if(args[0] == 'ban') {
		const a = new Discord.RichEmbed()
			.setTitle('BAN COMMAND')
			.setColor('0x35383D')
			.setDescription(':small_blue_diamond:Command Name - **BAN**\n:small_blue_diamond:Description - Bans A member from server\n:small_blue_diamond:Usage - `*ban @Ashutosh#3601 RAID(reason)`\n:small_blue_diamond:Permission - BAN User')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
	else if(args[0] == 'kick') {
		const a = new Discord.RichEmbed()
			.setTitle('KICK COMMAND')
			.setColor('0x35383D')
			.setDescription('Command Name - **KICK**\nDescription - Kicks A member from server\nUsage - `*kick @Ashutosh#3601 (reason)`\n:small_blue_diamond:Permisssion - KICK User')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
	else if(args[0] == 'announce') {
		const a = new Discord.RichEmbed()
			.setTitle('ANNOUNCE COMMAND')
			.setColor('0x35383D')
			.setDescription('Command Name - **ANNOUNCE**\nDescription - Announce an important info through embed with customizable embed colour\nUsage - `*announce (colour hexcode) Announcemnt`\nPermissions - Administration')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
	else if(args[0] == 'arole') {
		const a = new Discord.RichEmbed()
			.setTitle('AddRole COMMAND')
			.setColor('0x35383D')
			.setDescription(':small_blue_diamond:Command Name - **AROLE**\n:small_blue_diamond:Description - Add The Role To mentioned User\n:small_blue_diamond:Usage - `*arole {currently command is unstable`\n:small_blue_diamond:Permissions - NOT AVAILABLE YET')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
	else if(args[0] == 'avatar') {
		const a = new Discord.RichEmbed()
			.setTitle('AVATAR COMMAND')
			.setColor('0x35383D')
			.setDescription(':small_blue_diamond:Command Name - **AVATAR**\n:small_blue_diamond:Description - Fetches The avatar/pfp of author(or) multiple mentioned user.\n:small_blue_diamond:Usage - `*avatar - Fetches author avatar |*avatar @user1 @user2 - Fetches User1 and User 2 avatar`\n:small_blue_diamond:Permissions - NONE')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
	else if(args[0] == 'botinfo') {
		const a = new Discord.RichEmbed()
			.setTitle('BOTINFO COMMAND')
			.setColor('0x35383D')
			.setDescription(':small_blue_diamond:Command Name - **BOTINFO**\n:small_blue_diamond:Description - Fetches all important info about bot.\n:small_blue_diamond:Usage - `*botinfo `\n:small_blue_diamond:Permissions - NONE')
			.setFooter('BLC MOD™ |');
		message.channel.send(a);
	}
};
module.exports.help = {
	name:'help',
	aliases: [],
};
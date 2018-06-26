const Discord = require('discord.js');
module.exports.run = async (client, message) => {
//	if(message.guild.id !== '433203711226019841') return;
	const pages = ['This is page one!', 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**'];
	let page = 1;

	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle('Supporting Rooster Shop™')
		.addField('We are glad to say that Our Server\'s Official Bot is @❖Roosty Baby Beta❖', ':tada: U Can use --help for commands and more. So that Bots Economy is $ In which we call Them as CCP-Community currency points\nWhat\'s the use of CCP?\n**Here is the list**........................')
		.addBlankField()
		.addField('🔗**800 Rooster CCP**', 'To Have your own Command through <@159985870458322944> ')
		.addField('🔗**1000 Rooster CCP**', 'To Conduct a poll #daily-inspiring-quotes-polls ')
		.addField('🔗**2000 Rooster CCP**', 'To Have your riddle #❓❔❓riddlemasters  ')
		.addField('🔗**5000 Rooster CCP**', 'To make your Youtube/Twitch/Reddit Link Advertise at our Server ')
		.setFooter(`Page ${page} of ${pages.length} | To buy any of these U Must contact any **Over Allied Powers**`)
		.setDescription(pages[page - 1]);

	message.channel.send(embed).then(msg => {

		msg.react('⏪').then(msg.react('⏩'));

		const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
		const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

		const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
		const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });


		backwards.on('collect', () => {
			if (page === 1) {return;}
			page--;
			embed.setDescription(pages[page - 1]);
			embed.setFooter(`Page ${page} of ${pages.length}`);
			msg.edit(embed);
		});

		forwards.on('collect', () => {
			if (page === pages.length) {return;}
			page++;
			embed.addField('🔗**6000 Rooster CCP**', 'To Highlight you at top Of Admin roles when you are Streaming In youtube/twitch ');
			embed.addField('🔗**75000 Rooster CCP**', 'Host a Karaoke Event at Our Server ');
			embed.addField('🔗**10000 Rooster CCP**', 'To have access As Dj :sunglasses:  ');
			embed.addField('🔗**15000 Rooster CCP**', 'To announce something Useful at our Server ');
			embed.setDescription(pages[page - 1]);
			embed.setFooter(`Page ${page} of ${pages.length}`);
			msg.edit(embed);
		});

	});


};
module.exports.help = {
	name: 'rstore',
	aliases: [],
};

const Discord = require('discord.js');
const snekfetch = require('snekfetch');
module.exports.run = async (client, message, args) => {
	{const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });
		const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;
		if (body.result_type === 'no_results') {
			return message.channel.send(`No results found for **${args.join(' ')}**`);
		}
		const [answer] = body.list;

		const embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up.\n${answer.thumbs_down} thumbs down.`)
			.setFooter(`Tags: ${body.tags.join(', ')} | ${message.author.createdAt}`);
			// .setFooter(`${client.ping}ms`);

		message.channel.send(embed);
	}

};
module.exports.help = {
	name:'urban',
	aliases: [],
};
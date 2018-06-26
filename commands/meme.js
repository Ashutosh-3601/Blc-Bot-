/* const Discord = require('discord.js');
const meme = require('memejs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	meme(function(data) {
		const embed = new Discord.RichEmbed()
			.setTitle(data.title[0])
			.setColor('RANDOM')
			.setImage(data.url[0]);
		message.channel.send({ embed });
	});
};*/
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message) => {
	const{ body } = await superagent
		.get('https://api-to.get-a.life/meme');

	const me = new Discord.RichEmbed()
		.setColor('0x35383D')
		.setTitle('lmao!')
		.setImage(body.url);

	message.channel.send(me);
};

exports.help = {
	name: 'meme',
	aliases: ['memez'],
	category: 'Miscelaneous',
	description: 'Memezzzz 4 life',
	usage: 'meme',
};
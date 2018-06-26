const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message) => {
	const{ body } = await superagent
		.get('https://some-random-api.ml/dogfact');
	// console.log(body);

	const me = new Discord.RichEmbed()
		.setColor('#7289DA')
		.setTitle('**DogFacts**')
		.setDescription(`**${body.fact}**`)
		.addField('Powered By', '**[DogFact](https://some-random-api.ml/dogfact)**');

	message.channel.send(me);
};

exports.help = {
	name: 'dogfact',
	aliases: [],
};
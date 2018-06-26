const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message) => {
	const{ body } = await superagent
		.get('https://cat-fact.herokuapp.com/facts/random');
	//	console.log(body);

	const me = new Discord.RichEmbed()
		.setColor('#7289DA')
		.setTitle('**CatFacts**')
		.setDescription(`**${body.text}**`)
		.addField('Powered By', '**[CatFact](https://cat-fact.herokuapp.com)**');

	message.channel.send(me);
};

exports.help = {
	name: 'catfact',
	aliases: [],
};
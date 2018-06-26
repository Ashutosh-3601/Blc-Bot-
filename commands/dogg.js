const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message) => {
	const{ body } = await superagent
		.get('https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif');
	//	console.log(body);

	const me = new Discord.RichEmbed()
		.setColor('#7289DA')
		.setTitle('**Doggies**')
		.setImage(`${body}.gif`)
		.addField('Powered By', '**[Doggie](https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif)**');

	message.channel.send(me);
};

exports.help = {
	name: 'dogg',
	aliases: [],
};
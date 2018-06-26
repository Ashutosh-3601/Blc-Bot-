const Discord = require('discord.js');
const snekfetch = require('snekfetch');
module.exports.run = (client, message) => {
	try {
		snekfetch.get('https://aws.random.cat/meow').then(res => {
			const embed = new Discord.RichEmbed()
				.addField('CATS', 'Cats are lovely.. isn\'t it😍')
				.setImage(res.body.file);
			return message.channel.send({ embed });
		});
	}
	catch(err) {
		return message.channel.send(err.stack);
	}
};
module.exports.help = {
	name:'cat',
	aliases: ['neko'],
};
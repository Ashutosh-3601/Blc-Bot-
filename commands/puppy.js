const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
exports.run = async (client, message) => {
	randomPuppy(function(data) {
		const embed = new Discord.RichEmbed()
			// .setTitle(data.title)
			.setColor('RANDOM')
			.setImage(data.url);
		message.channel.send({ embed })
			.catch(console.error());
		// .then(err => {
		// console.log(err);
		// });
	});
};

exports.help = {
	name: 'puppy',
	aliases: [],
	category: 'Miscelaneous',
	description: 'Memezzzz 4 life',
	usage: 'meme',
};
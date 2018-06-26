const discord = require ('discord.js');

exports.run = async (client, message) => {

	const sa = require ('superagent');

	const { body } = await sa
		.get('https://icanhazdadjoke.com/slack');

	const o = new discord.RichEmbed()
		.setColor(0xFFFFFF)
		.setAuthor(message.author.username, message.author.avatarURL)
		.setTitle('DAD JOKES™')
		.setDescription('**' + body.attachments.map(a => a.text) + '**');
	message.channel.send(o);

};
module.exports.help = {
	name:'jokes',
	aliases: ['jokez', 'dadjokes'],
};
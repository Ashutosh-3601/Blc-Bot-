const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	if(message.author.id !== '316943845596200960') return;
	function clean(text) {
		if (typeof (text) === 'string') {return text.replace(/'/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
		else {return text;}
	}

	console.log(`\n${message.author.username}#${message.author.discriminator} Used .Eval Command On ${message.guild.name}`);
	const argresult = args.join(' ');
	if (message.author.id !== '316943845596200960') {
		message.channel.send('You Don\'t Have Permissions To Use This Command !');
		return;
	}
	if (!argresult) {
		return message.channel.send('Please Specify a Code To Run!');
	}

	try {

		let evaled = eval(argresult);

		if (typeof evaled !== 'string') {evaled = require('util').inspect(evaled, { 'depth':0 });}
		if (evaled.includes(client.token)) {
			console.log(`\n${message.author.username}#${message.author.discriminator} Try To Get The Bot Token On ${message.guild.name} (ServerID: ${message.guild.id}).\n`);
			return message.channel.send('', {
				embed: {
					color: 0xFF5733,
					title: ':exclamation::exclamation:**No U**:exclamation::exclamation:',
					description: 'I can\'t Give Token To You! But Take This <a:agooglepoop:​450024197687869441>',
				},
			});
		}

		const embed = new Discord.RichEmbed()
			.addField(`${client.user.username} - JavaScript Eval Success:`, '** **')
			.addField(':inbox_tray: **INPUT**', '```' + args.join(' ') + '```')
			.addField(':outbox_tray: **OUTPUT**', '```js\n' + clean(evaled) + '```')
			.setColor(0xFF5733)
			.setFooter(message.createdAt, message.author.avatarURL);
		message.channel.send({ embed });

	}
	catch (err) {

		message.channel.send(new Discord.RichEmbed()
			.addField(`${client.user.username} - JavaScript Eval Error:`, 'There Was a Problem With The Code That You Are Trying To Run!')
			.addField(':no_entry: ERROR', '```css\n' + clean(err) + '```')
			.setColor(0xFF5733)
			.setFooter(message.createdAt, message.author.avatarURL))

			.catch(error => message.channel.send(`**ERROR:** ${error.message}`));
	}

};
module.exports.help = {
	name:'eval',
	aliases: [],
};
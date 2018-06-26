const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
	if(message.author.id === '316943845596200960') {
		{if(!args[0] || args.size < 1) return message.reply('Must provide a command name to reload.');}
		delete require.cache[require.resolve(`./${args[0]}.js`)];
		const reloadembed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('Command Reloaded  <:tick:446704972541984769>', `${message.client.user.username} has reloaded<:discord:446702657944682508> **${args[0]}** command.`);
		message.channel.send(reloadembed);
	}
	else {
		return message.channel.send('**Author Only Command**');
	}
};
module.exports.help = {
	name:'reload',
	aliases: ['r'],
};
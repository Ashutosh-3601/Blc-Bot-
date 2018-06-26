// const Discord = require('discord.js');
module.exports.run = (client, message) => {
	const today = new Date();
	const Day = today.toString().split(' ')[0].concat('day');
	const Month = today.toString().split(' ')[1];
	const Year = today.toString().split(' ')[3];
	message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(' ')[4]}\``);
};
module.exports.help = {
	name:'time',
	aliases: [],
};
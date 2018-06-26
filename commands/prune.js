module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Invalid permissions!');
	const amount = parseInt(args[0]);
	if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
	}
	else if (amount < 2 || amount > 100) {
		return message.reply('you need to input a number between 2 and 100.');
	}
	message.channel.bulkDelete(amount + 1);
	message.channel.send(`**Deleted ${amount} messages... Real Quick**`).then(m => m.delete(1000));
};
module.exports.help = {
	name:'prune',
	aliases: ['clean'],
};
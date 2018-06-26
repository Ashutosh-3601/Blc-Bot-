module.exports.run = async (bot, message, args) => {

	// !addrole @andrew Dog Person
	if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('Sorry, **Not Authorised**');
	const rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!rMember) return message.reply('Couldn\'t find that user.');
	const role = args[1];
	if(!role) return message.reply('Specify a role!');
	const gRole = message.guild.roles.find('name', role);
	if(!gRole) return message.reply('Couldn\'t find that role.');

	if(rMember.roles.has(gRole.name)) return message.reply('They already have that role.');
	await (rMember.addRole(gRole.name));
	console.log(role);
	try{
		await rMember.send(`Congrats, you have been given the role ${gRole.name}`);
	}
	catch(e) {
		console.log(e.stack);
		message.channel.send(`Gave <@${rMember.id} role ${gRole.name}. We tried to DM them, but their DMs are locked.`);
	}
};

module.exports.help = {
	name: 'arole',
	aliases: [],
};
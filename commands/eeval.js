module.exports.run = async (client, message, args) => {
	if(message.author.id !== '316943845596200960') return;
	function clean(text) {
		if (typeof (text) === 'string') {return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
		else {return text;}
	}
	try {
		const code = args.join(' ');
		let evaled = eval(code);

		if (typeof evaled !== 'string') {evaled = require('util').inspect(evaled);}

		message.channel.send(clean(evaled), { code:'xl' });
	}
	catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
};
module.exports.help = {
	name:'eeval',
	aliases: [],
};
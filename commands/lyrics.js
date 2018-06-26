const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
	const artist = args[0];
	const track = args.slice(1).join(' ');
	const{ body } = await superagent
		.get(`https://orion.apiseeds.com/api/music/lyric/${artist}/${track}?apikey=3nDckUv2OE8v6XL5pn3YFSc7YPTOS5qmpqREqFmxUKV9BHf1dcO8vRT6Vy3TR0gh`);
	const m = new Discord.RichEmbed()
		.addField('dd', body.tract.name);
	message.channel.send(m);
};
module.exports.help = {
	name:'lyrics',
	aliases: ['binfo', 'info'],
};
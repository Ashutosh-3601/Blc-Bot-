// const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
	const search = args.join(' ');
	const apiyt = 'AIzaSyBcwu1SywcDUTfyRTFVVBtOUmllvVu5lzY';
	const query = encodeURIComponent(search);
	if (!search) return msg.channel.send('❌ You must search something!');
	if (query.length > 1024) return msg.channel.send('❌ The query length may not exceed 1024 caracters.');

	const request = require('request');

	await request(`https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=GB&maxResults=1&q=${query}&key=${apiyt}`, async (err, http, body) => {
		if (err && http.statusCode !== 200) throw err;
		const content = JSON.parse(body);

		if (content.items === undefined) return await msg.channel.send('❌ An unknown error has occured!');
		if (content.pageInfo.totalResults === 0) return await msg.channel.send(`❌ No result matching \`${search}\`!`);
		let result;
		if (content.items[0].id.kind === 'youtube#channel') {result = `📺 https://www.youtube.com/channel/${content.items[0].id.channelId}`;}
		else if (content.items[0].id.kind === 'youtube#playlist') {result = `📁 https://www.youtube.com/playlist?list=${content.items[0].id.playlistId}`;}
		else if (content.items[0].id.kind === 'youtube#video') {
			if (content.items[0].snippet.liveBroadcastContent === 'live') result = `🔴 https://www.youtube.com/watch?v=${content.items[0].id.videoId}`;
			else result = `📹 https://www.youtube.com/watch?v=${content.items[0].id.videoId}`;
		}

		return await msg.channel.send(`<:youtube:368160510320836608> Result for \`${search}\` :\n${result}`);
	});
};
module.exports.help = {
	name: 'youtube',
	aliases: [],
};
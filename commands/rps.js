// const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
	const choice = args[0];
	if (choice == 'paper' || choice == 'p') {
		const numb = Math.floor(Math.random() * 100);
		let choice2 = 0;
		let response = 0;
		if (numb <= 50) {
			choice2 = 'paper';
		}
		else if (numb > 50) {
			choice2 = 'rock';
		}
		else {
			choice2 = 'scissors';
		}
		if (choice2 == 'scissors') {
			response = 'I\'m choosing **Scissors**! :v: I win!';
		}
		else if (choice2 == 'paper') {
			response = 'I\'m choosing **Paper**! :hand_splayed: It\'s a tie!';
		}
		else {
			response = 'I\'m choosing **Rock**! :punch: You win!';
		}
		message.channel.send(response);
	}
	else if (choice == 'rock' || choice == 'r') {
		const numb = Math.floor(Math.random() * 100);
		let choice3 = 0;
		let response3 = 0;
		if (numb <= 50) {
			choice3 = 'paper';
		}
		else if (numb > 50) {
			choice3 = 'rock';
		}
		else {
			choice3 = 'scissors';
		}
		if (choice3 == 'paper') {
			response3 = 'I\'m choosing **Paper**! :hand_splayed: I win!';
		}
		else if (choice3 == 'rock') {
			response3 = 'I\'m choosing **Rock**! :punch: It\'s a tie!';
		}
		else {
			response3 = 'I\'m choosing **Scissors**! :v: You win!';
		}
		message.channel.send(response3);
	}
	else if (choice == 'scissors' || choice == 's') {
		const numb = Math.floor(Math.random() * 100);
		let choice4 = 0;
		let response4 = 0;
		if (numb <= 50) {
			choice4 = 'paper';
		}
		else if (numb > 50) {
			choice4 = 'rock';
		}
		else {
			choice4 = 'scissors';
		}
		if (choice4 == 'rock') {
			response4 = 'I\'m choosing **Paper**! :hand_splayed: You win!';
		}
		else if (choice4 == 'scissors') {
			response4 = 'I\'m choosing **Scissors**! :v: It\'s a tie!';
		}
		else {
			response4 = 'I\'m choosing **Rock**! :punch: I win!';
		}
		message.channel.send(response4);
	}
	else {
		message.channel.send('You need to use `{prefix}rps` <rock|paper|scissors>');
	}
};

exports.help = {
	name: 'rps',
	aliases: [],
	description: 'Play Rock Paper Scissors with bot',
};
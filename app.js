const express = require('express');
const apiRoute = require('./routes/apiRouter')
const { token,prefix } = require('./config.json')
const fs = require('fs');
const { Client, Collection } = require('discord.js')
const client = new Client()
client.commands = new Collection();
const app = express()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready',() => {
    console.log(`Bot ${client.user.tag} Ready`)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


app.use('/api',apiRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${process.env.PORT || 3000}`)
})
client.login(token)
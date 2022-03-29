---
sidebar_position: 1
---

# Getting Started

Official Chat Logs library for interacting with the Chat Logs API

<br/>

<center>

[<img src="https://logs.chat/img/meta.png" alt="Logo" title="Chat Logs" width="100%" />](https://logs.chat)

<br/>

[![](https://nodei.co/npm/logs.chat.png)](https://www.npmjs.com/package/logs.chat) 

[![NPM version](https://img.shields.io/npm/v/logs.chat.svg?maxAge=3600)](https://www.npmjs.com/package/logs.chat) [![NPM downloads](https://img.shields.io/npm/dt/logs.chat.svg?maxAge=3600)](https://www.npmjs.com/package/logs.chat)

[Chat Logs](https://www.npmjs.com/package/logs.chat)
</center>

### Table Of Getting Started Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)

### About 

- NPM package that saves messages online to view it later
- Useful for bots where users can save messages history & cleared messages online
- Supports the Promise-API, you will be able to use .then, .catch, etc...
- & more...

### Installation

``
npm i logs.chat
``

### Example Usage 

```js
const chat = require('logs.chat');
const Discord = require('discord.js');
const client = new Discord.Client({
	"intents": [
		"GUILDS",
		"GUILD_MESSAGES"
	]
});
const prefix = '!';

client.on('ready', () => {
	console.log('Logged in as ' + client.user.tag);
});

client.on('messageCreate', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'save') {
		let messages = await message.channel.messages.fetch();
		let chat = await chat.create(messages);
		let embed = new Discord.MessageEmbed()
			.setTitle(`Chat Created with ${messages.size} messages`)
			.setColor("#7289DA")
			.setThumbnail(message.guild.iconURL({dynamic:true}))
			.setDescription(`[View Chat Online](${chat.url})`)
			.addField("Channel", message.channel, true)
			.addField("Chat Code", chat.code, true)
		message.channel.send({embeds: [embed]});
		await message.delete();
	}
});

client.login("TOKEN")
```
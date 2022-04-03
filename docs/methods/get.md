---
sidebar_position: 2
---

# Get

Get Method

### Table Of Get Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- ID (Chat ID)
```js
get(ID)
```

### Example Usage
```js
await chat.get("1");
```

### Returned Data
Returns Chat Messages Array
```js
[
	{
		"channelID": "816995778785574973",
		"deleted": false,
		"id": "817301532784984124",
		"type": "DEFAULT",
		"system": false,
		"content": "__this is a test :)__",
		"authorID": "300530315351425024",
		"pinned": false,
		"tts": false,
		"nonce": null,
		"embeds": [],
		"attachments": [],
		"createdTimestamp": 1614930270144,
		"editedTimestamp": 0,
		"webhookID": null,
		"applicationID": null,
		"activity": null,
		"flags": 0,
		"reference": null,
		"guildID": "711273487045623878",
		"cleanContent": "__this is a test :)__"
	},
	{
		"channelID": "816995778785574973",
		"deleted": false,
		"id": "817301510466699275",
		"type": "DEFAULT",
		"system": false,
		"content": "hi",
		"authorID": "300530315351425024",
		"pinned": false,
		"tts": false,
		"nonce": null,
		"embeds": [],
		"attachments": [],
		"createdTimestamp": 1614930264823,
		"editedTimestamp": 0,
		"webhookID": null,
		"applicationID": null,
		"activity": null,
		"flags": 0,
		"reference": null,
		"guildID": "711273487045623878",
		"cleanContent": "hi"
	}
]
```
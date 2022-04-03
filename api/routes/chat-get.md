---
sidebar_position: 2
---

# Get Chat

Get Chat Route

### Table Of Get Chat Route

- [Route](#route)
- [Method](#method)
- [Parameters](#parameters)
- [Returned Data](#returned-data)

### Route
```js
https://logs.chat/api/chat/:ID
```

### Method
:::tip Request Method
GET
:::

### Parameters
- :ID (Chat ID)

### Returned Data
Returns Chat Object
- ID (Chat ID)
- chat (Chat Messages Array)
```js
{
	"ID": "1",
	"chat": [
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
}
```
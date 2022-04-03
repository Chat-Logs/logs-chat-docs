---
sidebar_position: 1
---

# Create

Create Method

### Table Of Create Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- messages (Array of messages)
```js
create(messages)
```

### Example Usage
```js
let messages = await channel.messages.fetch();
await chat.create(messages);
```

### Returned Data
Returns Created Chat Object
- ID (Chat ID)
- url (Chat URL)
```js
{
	"ID": "1",
	"url": "https://logs.chat/chat/1"
}
```
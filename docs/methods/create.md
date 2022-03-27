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
Returns Chat Object
- URL (chat URL)
- code (chat code/ID)
```js
{
	"url": "https://logs.chat/chat/1",
	"code": "1"
}
```
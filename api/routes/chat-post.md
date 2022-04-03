---
sidebar_position: 1
---

# Create Chat

Create Chat Route

### Table Of Create Chat Route

- [Route](#route)
- [Method](#method)
- [Body](#body)
- [Returned Data](#returned-data)

### Route
```js
https://logs.chat/api/chat
```

### Method
:::tip Request Method
POST
:::

### Body
- messages (Discord Chat Messages Collection)

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
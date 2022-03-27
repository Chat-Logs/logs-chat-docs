---
sidebar_position: 1
---

# Index

Index Route

### Table Of Index Route

- [Route](#route)
- [Method](#method)
- [Parameters](#parameters)
- [Returned Data](#returned-data)

### Route
```js
https://logs.chat/api
```

### Method
:::tip Request Method
GET
:::

### Parameters
- No parameters for this route

### Returned Data
Returns Website Status Object
- success (boolean of the request success status)
- message (the returned message from the API)
- ram (ram the website is using in MB)
- database (database ping in ms)
- uptime (the website uptime in ms)
- statistics (website statistics object)
```js
{
    "success": true,
    "message": "API is running, read docs at https://docs.logs.chat",
    "ram": 26.97,
    "database": 16,
    "uptime": 13322.662931,
    "statistics": {
        "total_chats": 158,
        "total_messages": 1855
    }
}
```
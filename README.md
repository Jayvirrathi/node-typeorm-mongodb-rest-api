# REST API with Node.js, mongodb with TypeORM

> A Basic Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:4000/

npm start
```

## Prerequisites

-   Nodejs
-   Mongodb

**Request:**

```json

POST user/

{
    "firstName": "elon",
    "lastName": "musk",
    "email": "elon@gmail.com",
    "password": "test@1234"
}

PUT user/:id
{
    "email": "elonmusk@tesla.com"
}

GET users

GET user/:id

DELETE user/:id

```

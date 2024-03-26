# Mailer

Mailer implementation in Node.js.

## References
I talk about this project in this episode of my tech newsletter:
https://implementing.substack.com/p/how-to-create-mailer-nodejs-using-gmail-account

## Requirements

Node version >= 20

## Install dependencies

```sh
yarn install
```

## How to use

- Create the .env file based on the env-template.
- Starts the server by executing:
```sh
yarn serve:development
```

Send test email:
```sh
curl --location 'localhost/send-mail' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "marcomoauro@hotmail.it",
  "subject": "Test Subject from Node.js Mailer",
  "body": "Example body for Implementing post"
}'
```
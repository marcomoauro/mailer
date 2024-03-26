curl --location 'localhost/send-mail' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "marcomoauro@hotmail.it",
  "subject": "Test Subject from Node.js Mailer",
  "body": "Example body for Implementing post"
}'
# Spenza Backend

## Features

- JWT Authentication
- Webhook Subscription
- Incoming Webhook Event Handling
- Retry Mechanism
- MongoDB Storage

## Run

npm install

npm run start:dev

## API Endpoints

POST /auth/signup

POST /auth/login

POST /webhooks

GET /webhooks

DELETE /webhooks/:id

POST /events/webhook

GET /events
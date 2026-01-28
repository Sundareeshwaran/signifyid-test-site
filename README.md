# SignifyID Test Site

This repository contains a simple test client for SignifyID login flows, deployed on Vercel.[file:1]

## Live application

- Login URL: https://signifyid.vercel.app/client/login[file:1]

## Client configuration

Use the following credentials when configuring or testing the SignifyID client in this project (for development/testing only):

- Client ID: `client_48d768a1b80b4ab0b68e80092c10727c`[file:1]
- Client secret: `secret_3e4112a70ade44df93ee54bcd201ae23a7c45a98238444dc9c8210cebd39e136`[file:1]

> Do not use these values in production. Rotate or replace them with environment variables before deploying to any real environment.[file:1]

## Getting started

1. Clone the repository:
   - `git clone https://github.com/Sundareeshwaran/signifyid-test-site.git`[file:1]
2. Install dependencies:
   - `npm install` or `yarn install` (depending on your setup).[file:1]
3. Configure environment variables:
   - Set `CLIENT_ID` and `CLIENT_SECRET` using the values above or your own SignifyID credentials.[file:1]
4. Run the development server:
   - `npm run dev` or `yarn dev`.[file:1]

Then open the login page at:

- `http://localhost:3000/client/login` (local)
- `https://signifyid.vercel.app/client/login` (deployed)[file:1]

## Security note

If this is a public repository, move the client secret into an environment variable (`.env.local`) and **never** commit real secrets to Git.[web:9]

# aprendareact-backend

This project implements a backend to serve the frontend from the website [aprendareact](htts://www.aprendareact.com.br).


## Dependencies
- Node 12.4.0 
- [NVM](https://github.com/nvm-sh/nvm)

## How to run this project

### Configure Google OAuth
To generate your Google credentials you can follow [these steps](https://developers.google.com/identity/protocols/OAuth2UserAgent).

It is important to remind you that for development purposes once you get to register your authorized redirection URIs, you need to add `http://localhost:8080/auth/google/callback`

### Set a .env file
Set the variables needed in a .env file. A sample of how this file should be can be found at ` .env.sample ` in this project root folder.

### Run the application
To run this project do theses steps:
``` 
$ npm i
$ npm start
```
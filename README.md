# aprendareact-backend

This project implements a backend to serve the frontend of the website [aprendareact](htts://www.aprendareact.com.br). In this implementation we have some features as:
 - Google authentication using OAuth
 - Payment with mercadopago
 - Deploy to GCP (in Google App Engine) with Github Actions


## Dependencies
- Node 12.4.0 
- [NVM](https://github.com/nvm-sh/nvm)

## How to run this project

### Configure Google OAuth
To generate your Google credentials you can follow [these steps](https://developers.google.com/identity/protocols/OAuth2UserAgent).

It is important to remind you that for development purposes once you get to register your authorized redirection URIs, you need to add `http://localhost:8080/auth/google/callback`

### Configure Mercadopago
In order to make the endpoint `/payment` run you'll need mercadopago's credentials. Follow [this](https://www.mercadopago.com.br/developers/en/guides/payments/api/introduction/) tutorial to get yours and add it into your .env file as it is in .env.sample.
For more information about this configuration see this [link](https://www.mercadopago.com.br/developers/pt/plugins_sdks/sdks/official/nodejs/).

### Set a .env file
Set the variables needed in a .env file. A sample of how this file should be can be found at ` .env.sample ` in this project root folder.

### Run the application
To run this project do these steps:
``` 
$ npm i
$ npm start
```

### Run automatic tests
To run lint, unit, integration and mutation tests do these steps:
```
$ npm run test:all
```

### The endpoints

#### /health 
GET: `http://localhost:8080/health`

#### /auth/google
GET: `http://localhost:8080/auth/google`

this endpoint will open a google window to enter your credentials

#### /payment

Access the `index.html` file, fill the information and press pay. This button will perform a request as described next:

POST: `http://localhost:8080/payment`

example of body:
```
{
  transaction_amount: 1000,
  payment_method_id: 'visa',
  token: 'ab123',
  installments: 1,
  payer: {
    email: 'test@test.com'
  }
}
```

Some test cards available for tests purposes can be found [here](https://www.mercadopago.com.br/developers/en/guides/localization/local-cards).

_note: the field 'token' should be sent from the frontend application because the it has the responsability to tokenize the user's payment data and send it to the backend. For more information take a look at this [link](https://www.mercadopago.com.br/developers/en/guides/payments/api/receiving-payment-by-card/)._
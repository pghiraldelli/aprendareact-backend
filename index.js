require('@babel/register')
require('dotenv').config()
const app = require('./src/app').default

app.listen(8080, () => console.log('App running in port 8080'))

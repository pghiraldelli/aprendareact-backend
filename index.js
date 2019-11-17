require('@babel/register')
const server = require("./src/core/serverConfig").default

server.listen(8080, () => console.log('App running in port 8080'))

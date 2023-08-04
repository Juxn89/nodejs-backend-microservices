const express = require('express')
const swaggerUI = require('swagger-ui-express')
const config = require('../config')
const user = require('./components/user/network')
const swaggerDoc = require('./openapi.json')

const app = express();

app.use(express.json())

app.use('/api/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use('/api/users', user)

app.listen(config.nodePort, () => {
    console.log(`Listening on port ${ config.nodePort }`)
})
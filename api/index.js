const express = require('express')
const config = require('../config')
const user = require('./components/user/network')

const app = express();

app.use('/api/users', user)

app.listen(config.nodePort, () => {
    console.log(`Listening on port ${ config.nodePort }`)
})
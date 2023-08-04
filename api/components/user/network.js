const express = require('express')
const response = require('../../../network/response')
const { HTTP_STATUS } = require('../../../helpers')
const { list } = require('./controller')

const router = express.Router();

router.get('/', (req, res) => {
    const users = list();

    response.success(req, res, users, HTTP_STATUS.Ok)
})

module.exports = router;
const express = require('express')
const response = require('../../../network/response')
const { HTTP_STATUS } = require('../../../helpers')

const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, 'All is working', HTTP_STATUS.Ok)
})

module.exports = router;
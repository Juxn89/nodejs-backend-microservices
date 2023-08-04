const { HTTP_STATUS } = require('../helpers')

exports.success = (req, res, message, status) => {
    let statusCode = status || HTTP_STATUS.Ok
    let statusMessage = message || ''

    res.status(statusCode).send({
        error: false,
        status,
        body: statusMessage
    })
}

exports.error = (req, res, message, status) => {
    let statusCode = status || HTTP_STATUS.InternalServerError
    let statusMessage = message || 'Internal server error'

    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: statusMessage
    })
}


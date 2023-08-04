const express = require('express')
const response = require('../../../network/response')
const { HTTP_STATUS } = require('../../../helpers')
const Controller = require('./index')

const router = express.Router();

router.get('/', (req, res) => {
    Controller.list()
    .then((users) => {
    	response.success(req, res, users, HTTP_STATUS.Ok)            
    }).catch((err) => {
			response.error(req, res, err, HTTP_STATUS.InternalServerError)
    });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Controller.get(id)
			.then(user => response.success(req, res, user, HTTP_STATUS.Ok))
			.catch(err => { response.error(req, res, err, HTTP_STATUS.InternalServerError) })
})

router.post('/', (req, res) => {
	const { body } = req;
	Controller.upsert(body)
		.then(data => response.success(req, res, 'User added', HTTP_STATUS.Created))
		.catch(err => response.error(req, res, err, HTTP_STATUS.InternalServerError))
})

module.exports = router;
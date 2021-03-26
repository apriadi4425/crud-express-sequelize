const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')

router.post('/', UserController.Signup)

module.exports = router
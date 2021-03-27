const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')

router.post('/signin', UserController.SingIn)
router.post('/signup', UserController.Signup)

module.exports = router
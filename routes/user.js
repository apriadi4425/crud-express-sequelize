const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')

router.post('/signin', UserController.SingIn)
router.post('/signup', UserController.Signup)

router.get('/', UserController.GetAllUser)
router.get('/:id', UserController.GetById)

module.exports = router
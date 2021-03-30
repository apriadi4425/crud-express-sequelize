const express = require('express')
const router = express.Router()

const dotenv = require("dotenv")
dotenv.config();

const user = require('./user')

router.use('/user', user)

module.exports = router;
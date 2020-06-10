const express = require('express')
const router = express.Router()

const authController = require("@controllers/authController")

router.get('/get-data', [], authController.loginGetData)

module.exports = router
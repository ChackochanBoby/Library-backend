const express = require('express')
const { login, verifyLogin } = require('../controllers/authControllers')
const router = express.Router()

router.post("/", login)
router.get("/verify", verifyLogin)

module.exports =router
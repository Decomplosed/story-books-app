const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')

module.exports = router

const express = require('express-router')
const router = express.Router()

// @desc Login/Landing page
router.get('/', (req, res) => {
  res.send('Login')
})

//@desc Dashboard
router.get('/dashboard', (req, res) => {
  res.send('Dashboard')
})

module.exports = router

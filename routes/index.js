const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auths')

// @desc Login/Landing page
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//@desc Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router

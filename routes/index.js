const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

// @desc Login/Landing page
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//@desc Dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
  } catch (err) {}

  res.render('dashboard', {
    name: req.user.firstName,
  })
})

module.exports = router

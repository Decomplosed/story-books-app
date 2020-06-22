const express = require('express')
const router = express.Router()
const passport = require('passport')

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

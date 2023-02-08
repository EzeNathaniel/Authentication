const router = require('express').Router()

const {register, login, signin, dashboard, signup} = require('../controller/newUser')

router.post('/register', register)
router.post('/login', login)
router.get('/dashboard', dashboard)
router.get('/login', signin)
router.get('/signup', signup)
// router.get('/signUp', signUp)

module.exports = router;
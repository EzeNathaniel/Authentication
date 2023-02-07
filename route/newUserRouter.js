const router = require('express').Router()

const {register, login, signup, signin, dashboard} = require('../controller/newUser')

router.post('/register', register)
router.post('/login', login)
router.get('/signup', signup)
router.get('/dashboard', dashboard)
router.get('/signin', signin)

module.exports = router;
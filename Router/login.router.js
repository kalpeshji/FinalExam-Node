const { Router } = require('express')
const { getUser, addUser } = require('../Controller/login.controller')

const loginRoute = Router()

loginRoute.get('/', getUser)
loginRoute.post('/', addUser)

module.exports = loginRoute
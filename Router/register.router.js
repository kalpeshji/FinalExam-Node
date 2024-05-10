const { Router } = require('express')
const { getUser, addUser } = require('../Controller/register.controller')

const registerRoute = Router()

registerRoute.get('/', getUser)
registerRoute.post('/', addUser)

module.exports = registerRoute
const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String
}, { timestamps: true })

const loginModel = mongoose.model('login', loginSchema)

module.exports = loginModel
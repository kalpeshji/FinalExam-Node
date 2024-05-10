const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, { timestamps: true })

const registerModel = mongoose.model('User', registerSchema)

module.exports = registerModel
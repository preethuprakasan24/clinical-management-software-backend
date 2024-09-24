const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
})

const users = mongoose.model("users", userSchema)

module.exports = users
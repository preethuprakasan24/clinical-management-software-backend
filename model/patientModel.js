const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        type: String
    },
    gender: {
        type: String
    },
    date: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: String
    },
    drugAllergy: {
        type: String
    }
})

const patients = mongoose.model("patient", patientSchema)
module.exports = patients
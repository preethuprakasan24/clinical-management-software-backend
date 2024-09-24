const mongoose = require('mongoose')

const treatmentSchema = new mongoose.Schema({
    goodHealth: {
        type: String
    },
    medication: {
        type: String
    },
    operation: {
        type: String
    },
    allergy: {
        type: String
    },
    diabetic: {
        type: String
    },
    pressure: {
        type: String
    },
    heart: {
        type: String
    },
    patientId:{
        required:true,
        type: String
    }
})

const treatments = mongoose.model("treatment", treatmentSchema)

module.exports = treatments
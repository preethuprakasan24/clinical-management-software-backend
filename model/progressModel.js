const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
    date: {
        type: String
    },
    findings: {
        type: String
    },
    procedure: {
        type: String
    },
    total: {
        type: String
    },
    paid: {
        type: String
    },
    pending: {
        type: String
    },
    patientId:{
        required:true,
        type: String
    }
})

const progress = mongoose.model("progress", progressSchema)

module.exports = progress
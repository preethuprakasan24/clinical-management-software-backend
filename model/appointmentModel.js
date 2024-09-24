const mongoose = require('mongoose')

const appointmentModel = new mongoose.Schema({
    ptName: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    ptTreat: {
        type: String
    },
    status: {
        type: String
    }
})

const appointments = mongoose.model("appointments", appointmentModel)
module.exports = appointments
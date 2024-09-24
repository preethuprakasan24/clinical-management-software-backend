const mongoose = require('mongoose')

const planModel = new mongoose.Schema({
    name:{
        type:String
    },
    cost:{
        type:String 
    },
    description:{
        type:String
    }
})

const treatmentPlan = mongoose.model("treatmentplans", planModel)
module.exports = treatmentPlan
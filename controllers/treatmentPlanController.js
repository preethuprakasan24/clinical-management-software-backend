const treatmentPlan = require('../model/treatmentplanModel')


//add treatmentplan
exports.addTreatmentPlanController = async(req, res)=>{
    const{name, cost, description} = req.body
    
    try {
        const existingTreatmentPlan = await treatmentPlan.findOne({name})
        if(existingTreatmentPlan){
            res.status(406).json("treatment plan already exist")
        }else{
            const newTreatmentPlan = new treatmentPlan({
                name,
                cost,
                description
            })
            await newTreatmentPlan.save()
            res.status(200).json(newTreatmentPlan)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//get treatmentplan

exports.getAllTreatmentPlans= async(req,res)=>{
    try {
        const treatmentData = await treatmentPlan.find()
        res.status(200).json(treatmentData)
        
    } catch (error) {
        res.status(401).json(error)
    }
}
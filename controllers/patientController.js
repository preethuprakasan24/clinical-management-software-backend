const patients = require("../model/patientModel");
const jwt = require('jsonwebtoken')

//add patient
exports.addPatientController = async (req, res) => {
    const { firstname, lastname, gender, date, phone, address, age, drugAllergy } = req.body
    console.log(firstname, lastname, gender, date, phone, address, age, drugAllergy);
    // const patientId = req.payload
    // console.log(patientId);
    try {
        const existingPatient = await patients.findOne({ phone })
        if (existingPatient) {
            res.status(406).json('patient already exist')
        }
        else {
            const newPatient = new patients({
                firstname,
                lastname,
                gender,
                date,
                phone,
                address,
                age,
                drugAllergy
            })
            await newPatient.save()
            // const patientToken = jwt.sign({ patientId: newPatient._id }, "superpatientkey")
            // console.log(patientToken);
            res.status(200).json(newPatient)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

//get patient
exports.getAllPatientController = async (req, res) => {

    try {
        const allPatients = await patients.find()

        res.status(200).json(allPatients)
    } catch (error) {
        res.status(401).json(error)
    }
}

//search patient
exports.searchAllPatientController = async (req, res) => {

    const searchKey = req.query.search
    // console.log(searchKey);

    const query = {
        firstname: { $regex: searchKey, $options: 'i' }
    }

    try {
        const allPatients = await patients.find(query)
        res.status(200).json(allPatients)
    } catch (error) {
        res.status(401).json(error)
    }
}

//delete patient
exports.deletePatientController = async (req, res) => {

    const { id } = req.params

    try {
        const item = await patients.findByIdAndDelete({ _id: id })
        res.status(200).json('deleted successfully')
    } catch (error) {
        res.status(401).json(error)
    }
}

//edit patient
exports.editPatientController = async (req, res) => {
    const { firstname, lastname, gender, date, phone, address, age, drugAllergy } = req.body
    const { id } = req.params

    try {
        const existingPatient = await patients.findByIdAndUpdate({ _id: id }, {
            firstname,
            lastname,
            gender,
            date,
            phone,
            address,
            age,
            drugAllergy
        }, { new: true })
        await existingPatient.save()
        res.status(200).json(existingPatient)
    } catch (error) {
        res.status(401).json(error)
    }
}

//get indididual patient info
exports.getIndividualPatientController = async (req, res) => {
    console.log("inside individual patient controller");
    // const patientId = req.payload
    // console.log("Patient ID:", patientId)
    const {id} =req.params
    // console.log("dfsdf", id);
    
    try {
        const patientInfo = await patients.findOne({ _id:id})
        // console.log("Patient Info:", patientInfo);
        res.status(200).json(patientInfo)
    } catch (error) {
        res.status(401).json(error)
    }
}




const treatments = require('../model/treatmentModel')

//add medicalhistory
exports.medicalHistoryController = async (req, res) => {
    console.log("inside treatment controller");
    const { id } = req.params
    // const patientId = req.payload
    console.log(id);

    const { goodHealth, medication, operation, allergy, diabetic, pressure, heart } = req.body
    // console.log("consoling req body", goodHealth, medication, operation, allergy, diabetic, pressure, heart);

    try {

        const newTreatment = new treatments({
            goodHealth,
            medication,
            operation,
            allergy,
            diabetic,
            pressure,
            heart,
            patientId: id
        })
        await newTreatment.save()
        res.status(200).json(newTreatment)

    } catch (error) {
        res.status(401).json(error)
    }
}

//get medicalhistory
exports.getMedicalHistoryController = async (req, res) => {
    console.log("inside get medical history controller");

    const { id } = req.params
    // const patientId = req.payload
    console.log("patientid", id);

    try {
        const medicalHistory = await treatments.findOne({ patientId: id })
        console.log(medicalHistory);

        res.status(200).json(medicalHistory)
    } catch (error) {
        res.status(401).json(error)
    }
}


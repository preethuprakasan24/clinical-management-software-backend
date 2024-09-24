const express = require('express')
const userController = require('./controllers/userController')
const patientController = require('./controllers/patientController')
const jwt = require('./middleware/jwtMiddleware')
const treatmentController = require('./controllers/treatmentController')
const progressController = require('./controllers/progressController')
const treatmentPlanController = require('./controllers/treatmentPlanController')
const appointmentController = require('./controllers/appointmentController')


const router = new express.Router()

//Register doctor
router.post('/register-doctor', userController.registerController)

//login
router.post('/login-doctor', userController.loginController)


//add patient
router.post('/add-patient', patientController.addPatientController)

//get All Patients
router.get('/all-patients', patientController.getAllPatientController)

router.get('/search-all-patients', patientController.searchAllPatientController)


//delete patient
router.delete('/remove-patient/:id', patientController.deletePatientController)

//edit patient 
router.put('/edit-patient/:id', patientController.editPatientController)

//add medical history

router.post('/patient-rx/:id', treatmentController.medicalHistoryController)

//get individual patient info

router.get('/patient-info/:id', patientController.getIndividualPatientController)

//get medical history
router.get('/patient-medhistory/:id', treatmentController.getMedicalHistoryController)


//add progress details
router.post('/patient-progress/:id', progressController.addProgressDetailsController)

//get progress details
router.get('/get-progress/:id', progressController.getProgressDetails)

//add treatment
router.post('/add-treatment', treatmentPlanController.addTreatmentPlanController)

//get treatmentplan
router.get('/get-treatment', treatmentPlanController.getAllTreatmentPlans)

//addAppointment
router.post('/add-appointment', appointmentController.addAppointmentController)

//getappointment
router.get('/get-appointment', appointmentController.getAllAppointementController)

//edit appointment
router.put('/edit-appointment/:id', appointmentController.editAppointmentController)

//delete appointment
router.delete('/delete-appointment/:id', appointmentController.deleteAppointmentController)

module.exports = router

//Register receptionist
// router.post('/register-receptionist', userController.registerController)
// module.exports = router
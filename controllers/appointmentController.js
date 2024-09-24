const appointments = require('../model/appointmentModel')

exports.addAppointmentController = async (req, res) => {
    const { ptName, date, time, ptTreat, status } = req.body
    console.log(ptName, date, time, ptTreat, status);
    try {
        const existingAppointment = await appointments.findOne({ date, time })
        if (existingAppointment) {
            res.status(406).json("appointment slot is already booked")
        } else {
            const newBooking = new appointments({
                ptName,
                date,
                time,
                ptTreat,
                status
            })
            await newBooking.save()
            res.status(200).json(newBooking)
        }
    } catch (error) {
        res.status(401).json("hghffffff", error)
    }

}

exports.getAllAppointementController = async (req, res) => {
    try {
        const allApointments = await appointments.find()
        res.status(200).json(allApointments)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.editAppointmentController = async (req, res) => {
    const { ptName, date, time, ptTreat, status } = req.body
    const { id } = req.params

    try {
        const existingAppointment = await appointments.findByIdAndUpdate({ _id: id }, {
            ptName,
            date,
            time,
            ptTreat,
            status
        }, { new: true })
        await existingAppointment.save()
        res.status(200).json(existingAppointment)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.deleteAppointmentController = async (req, res) => {
    const { id } = req.params
    console.log(id);

    try {
        const item = await appointments.findByIdAndDelete({ _id: id })
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(401).json(error)
    }
}
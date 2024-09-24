const progress = require('../model/progressModel')

//add progress details 

exports.addProgressDetailsController = async (req, res) => {
    const { id } = req.params
    console.log("id while adding progress notes", id);
    const { date, findings, procedure, total, paid, pending } = req.body
    console.log("inside progress ", date, findings, procedure, total, paid, pending);

    try {
        const newProgress = new progress({
            date,
            findings,
            procedure,
            total,
            paid,
            pending,
            patientId: id
        })
        await newProgress.save()
        console.log(newProgress);

        res.status(200).json(newProgress)
    } catch (error) {
        console.log("Error while adding progress details: ", error.message);

        res.status(401).json({ error: error.message })
    }


}

//get progress details

exports.getProgressDetails = async (req, res) => {
    console.log("inside get progress details");
    
    const { id } = req.params
    console.log(id);
    try {
        const progressDetails = await progress.findOne({ patientId: id })
        console.log(progressDetails);

        res.status(200).json(progressDetails)
    } catch (error) {
        res.status(401).json({ error: error.message })
    }

}
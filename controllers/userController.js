const users = require("../model/userModel");
const jwt = require('jsonwebtoken')


//register 
exports.registerController = async (req, res) => {
    console.log('inside register controller');
    console.log(req.body);

    const { firstname, email, password } = req.body
    console.log(firstname, email, password);
    try {

        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Account already exist")
        } else {
            const newUser = new users({
                firstname,
                email,
                password,
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (error) {
        res.status(401).json(error)
    }



}


//login
exports.loginController = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email, password })
        // const token = jwt.sign({ userId: existingUser._id }, "supersecretkey")
        if (existingUser) {
            res.status(200).json( existingUser)
        } else {
            res.status(406).json("Account doesn't exist")
        }
    } catch (error) {
        res.status(401).json(error)
    }

}
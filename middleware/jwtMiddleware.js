const jwt = require('jsonwebtoken')


const jwtMiddleware = (req, res, next) => {
    console.log('inside jwt Middleware');
    // console.log(req.headers);
    
    const token = req.headers["authorization"].split(' ')[1]
    // console.log("token",token);
    try {
        
        const jwtResponse = jwt.verify(token,"superpatientkey")
        // console.log(jwtResponse);
        req.payload = jwtResponse.patientId
        next()

    } catch (error) {
        res.status(401).json(`Authorization failed ${error}`)
    }

}

module.exports = jwtMiddleware
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('./connection')

const dcServer = express()

dcServer.use(cors())
dcServer.use(express.json())
dcServer.use(router)


const PORT = 8080 || process.env.PORT

dcServer.listen(PORT, () => {
    console.log(`server is running in Port ${PORT}`);

})
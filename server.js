require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = 5000
const apiRoutes = require('./routes/api')

//console.log("Api key", process.env.ROME_2_RIO_KEY)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, "client/build")))

app.listen(port, () => console.log('Server is running on port '+ port))
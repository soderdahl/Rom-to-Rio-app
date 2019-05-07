const express = require('express')
const axios = require('axios')
const router = express.Router()

//GET api/test
router.get("/test", (req, res) => {
        console.log('query params:', req.query)
    res.json({data: req.query})
})

router.get("/newUser/:username", (req, res) => {
    const username = req.params.username
    console.log("Req params username", username)

    res.send('Welcome ' + username)
})

router.post('/getLocations', (req, res) => {
    const place = req.body.place
    const key = process.env.ROME_2_RIO_KEY
    //const url = "http://free.rome2rio.com/api/1.4/json/Geocode?key=" +key + '&query=' +  place
    const url = `http://free.rome2rio.com/api/1.4/json/Geocode?key=${key}&query=${place}`


    axios.get(url).then(response => {
        console.log("Axios response =>", response.data)
        res.json(response.data)
    })
    .catch(err => {
        console.log('Axios reuire error', err)
        res.status(500).send("error from external API")
    })
})


module.exports = router
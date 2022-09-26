const express = require('express')
const axios = require('axios')
const morgan = require('morgan')
const cors = require('cors');

const gradientString = require('gradient-string');

axios.defaults.validateStatus = function () {
    return true;
}; // we need this so that it ignores 404's for sites;

const app = express()
const port = 3000 // the port we use

let rootDomain = "https://youtube.com" // change to whatever you want!!

app.use(morgan('dev')); // request logging :D
app.use(cors()); // fixing http stuff for sites (ew)

// ------------------------------------------------

app.get('/domain/:target', async (req, res) => {
    rootDomain = `https://${req.params.target}`

    res.send("set target domain. have fun!")
}) // sets variable for root domain

// ------------------------------------------------

app.get('/', async (req, res) => {
    let request = await axios.get(`${rootDomain}/`)

    res.send(request.data)
}) // handles first layer of url

app.get("/:sub", async (req, res) => {
    path = req.params.sub

    let request = await axios.get(`${rootDomain}/${path}`)

    res.send(request.data)
}) // handles second layer of url

app.get("/:sub/:extra", async (req, res) => {
    path = req.params.sub
    addon = req.params.extra

    let request = await axios.get(`${rootDomain}/${path}/${addon}`)

    res.send(request.data)
}) // handles third layer of url

app.get("/:sub/:extra/:1", async (req, res) => {
    path = req.params.sub
    addon = req.params.extra

    addon1 = req.params[1]

    let request = await axios.get(`${rootDomain}/${path}/${addon}/${addon1}`)

    res.send(request.data)
}) // handles fourth layer of url

app.get("/:sub/:extra/:1/:2", async (req, res) => {
    path = req.params.sub
    addon = req.params.extra

    addon1 = req.params[1]
    addon2 = req.params[2]

    let request = await axios.get(`${rootDomain}/${path}/${addon}/${addon1}/${addon2}`)

    res.send(request.data)
}) // handles fifth layer of url

app.get("/:sub/:extra/:1/:2/:3", async (req, res) => {
    path = req.params.sub
    addon = req.params.extra

    addon1 = req.params[1]
    addon2 = req.params[2]
    addon3 = req.params[3]

    let request = await axios.get(`${rootDomain}/${path}/${addon}/${addon1}/${addon2}/${addon3}`)

    res.send(request.data)
}) // handles sixth layer of url

app.get("/:sub/:extra/:1/:2/:3/:4", async (req, res) => {
    path = req.params.sub
    addon = req.params.extra

    addon1 = req.params[1]
    addon2 = req.params[2]
    addon3 = req.params[3]
    addon4 = req.params[4]

    let request = await axios.get(`${rootDomain}/${path}/${addon}/${addon1}/${addon2}/${addon3}/${addon4}`)

    res.send(request.data)
}) // handles seventh layer of url

app.listen(port, () => {
  console.log(gradientString.pastel(`\nProxy running on port ${port} - <3`))
  console.log("Requests will be logged under here.\n")
})
require('dotenv').config()
require('module-alias/register')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({ credentials: true }))

const routes = require("@routes/api")
Object.keys(routes).map(key => {
    app.use(key, routes[key])
})

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

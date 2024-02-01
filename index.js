const express = require("express")
const conn = require("./db/conn")
const routers = require("./routers")
//const { body, validationResult } = require('express-validator')
const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.use(routers)


const port = 3000
conn()
    .then(() => app.listen(port, () => {
        console.info('app running on: ', `http://localhost:${port}`)
    }))
    .catch(() => process.exit())
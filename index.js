require('./core')
require('./action')
require('./db')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: "it's working"
    })
})

app.listen(3000)
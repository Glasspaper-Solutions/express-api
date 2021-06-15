const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()

const port = 4000

require('./routes/users.route')(app)
require('./routes/products.routes')(app)

app.get('/', (req, res) => {
    res.send('Hello ')
})

app.listen(port, () => {
    console.log(`this server running on port${port}`);
})
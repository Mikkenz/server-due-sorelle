const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())
routes(app)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app;
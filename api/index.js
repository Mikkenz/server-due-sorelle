const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000', // Quando fizer o deploy do site "origin: ['http://localhost:3000', 'http://meu-outro-app.com']"
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
routes(app)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app;
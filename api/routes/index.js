const bodyParser = require('body-parser')
const cliente = require('./clientesRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cliente)
}
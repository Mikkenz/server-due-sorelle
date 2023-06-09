const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController.js')
const clientes = require('../models/clientes.js')

const router = Router()

router.get('/clientes', ClienteController.mostraCliente)
router.get('/clientes/:id', ClienteController.mostraUmCliente)
router.post('/clientes', ClienteController.criaCliente)
router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/clientes/:id', ClienteController.deletaCliente)

module.exports = router
const { where } = require("sequelize");
const database = require("../models");

class ClienteController {
  static async mostraCliente(req, res) {
    try {
      const todosClientes = await database.Clientes.findAll();
      return res.status(200).json(todosClientes);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async mostraUmCliente(req, res) {
    const { id } = req.params;
    try {
      const umCliente = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umCliente);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criaCliente(req, res) {
    const novoCliente = req.body
    console.log(novoCliente)
    try{
        const novoClienteCriado = await database.Clientes.create(novoCliente)
        return res.status(200)
    } catch(err){
        return res.status(500).json(err.message);
    }
  }

  static async atualizaCliente(req, res){
    const { id } = req.params;
    const novasInfos = req.body;
    try{
        await database.Clientes.update(novasInfos, {where: {id: Number(id)}})
        const clienteAtualizado = await database.Clientes.findOne({where: { id: Number(id) }})
        return res.status(200).json(clienteAtualizado)
    } catch(err){
        return res.status(500).json(err);
    }
  }

  static async deletaCliente(req, res){
    const { id } = req.params;
    try{
        await database.Clientes.destroy({where: {id: Number(id)}})
        return res.status(200).json({mensagem: `DELETADO`})
    } catch(err){
        return res.status(500).json(err)
    }
  }
}

module.exports = ClienteController;

import ServiceClientes from "../service/clientes.js"

class ControllerAtendimento{
  async Criar(req, res){
    try{
        const {dia, hora, valor, status} = req.body 
        await ServiceClientes.Criar(dia, hora, valor, status)

        res.status(201).send({mensagem:"Cliente cadastrado com sucesso"})   
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Buscar(_, res){
    try{
        const clientes = await ServiceClientes.Buscar()
        res.send({mensagem: clientes})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Detalhe(req, res){
    try{
        const id = req.params.id
        const cliente = await ServiceClientes.Detalhe(id)
        res.status(200).send({mensagem: cliente})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Alterar(req, res){
    try{
        const id = req.params.id
        const {nome, email, senha} = req.body
        await ServiceClientes.Alterar(id,nome, email, senha)

        res.status(201).send({mensagem: "Cliente alterado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

   async Deletar(req, res){
    try{
        const id = req.params.id
        await ServiceClientes.Deletar(id)

        res.status(204).send({mensagem: "Cliente deletado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }

  }

}

export default new ControllerAtendimento()
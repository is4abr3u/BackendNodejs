import ServiceClientes from "../service/clientes.js"

class ControllerAtendimento{
  async Criar(req, res){
    try{
        const {nome, email, senha} = req.body 
        await ServiceClientes.Criar(nome, email, senha)

        res.status(201).send({mensagem:"Cliente cadastrado com sucesso"})   
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Buscar(_, res){
    try{
        const clientes = await ServiceClientes.Buscar()
        const filter = clientes.find(it => it.dataValues.id === req.session.id)
        res.send({mensagem: filter})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Detalhe(req, res){
    try{
        const id = req.session.id
        const cliente = await ServiceClientes.Detalhe(id)
        res.status(200).send({mensagem: cliente})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Alterar(req, res){
    try{
        const id = req.session.id
        const {nome, email, senha} = req.body
        await ServiceClientes.Alterar(id,nome, email, senha)

        res.status(201).send({mensagem: "Cliente alterado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

   async Deletar(req, res){
    try{
        const identificador = req.session.id
        await ServiceClientes.Deletar(identificador)

        res.status(204).send({mensagem: "Cliente deletado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }

  }

   async Login(req, res) {
        try {
            const {email, senha } = req.body
            const token = await ServiceClientes.Login(email, senha)

            res.status(200).send({token})

        } catch (error) {
            res.status(500).send({ mensagem: error.message})

        }

    }

}

export default new ControllerAtendimento()
import ServiceAtendimentos from "../service/atendimento.js"

class ControllerAtendimento{
  async Criar(req, res){
    try{
        const {dia, hora, valor, status} = req.body 
        await ServiceAtendimentos.Criar(dia, hora, valor, status)

        res.status(201).send({mensagem:"Atendimento cadastrado com sucesso"})   
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Buscar(_, res){
    try{
        const atendimento = await ServiceAtendimentos.Buscar()
        res.send({mensagem: atendimento})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Detalhe(req, res){
    try{
        const id = req.params.id
        const atendimento = await ServiceAtendimentos.Detalhe(id)
        res.status(200).send({mensagem: atendimento})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

  async Alterar(req, res){
    try{
        const id = req.params.id
        const {dia, hora, valor, status} = req.body
        await ServiceAtendimentos.Alterar(id, dia, hora, valor, status)

        res.status(201).send({mensagem: "Atendimento alterado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }
  }

   async Deletar(req, res){
    try{
        const id = req.params.id
        await ServiceAtendimentos.Deletar(id)

        res.status(204).send({mensagem: "Atendimento deletado com sucesso"})
        
    } catch (error){
        res.status(500).send({ mensagem: error.message})
    }

  }

  



}

export default new ControllerAtendimento()
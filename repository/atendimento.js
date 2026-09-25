import Atendimentos from "../model/atendimento.js"

class RepositoryAtendimentos{

    async Create(dia, hora, valor, status){
        const atendimentoCreate = await Atendimentos.create({dia, hora, valor, status})

        return atendimentoCreate
    
    }

    async FindAll(){
        const atendimentoFindAll = await Atendimentos.findAll()

        return atendimentoFindAll
    
    }

    async FindByPk(id){
        const atendimentoFindByPk = await Atendimentos.findByPk(id)

        return atendimentoFindByPk
    
    }

     async Update(id, dia, hora, valor, status){
        const atendimentoUpdate = await Atendimentos.findByPk(id)

        if(!atendimentoUpdate){
            throw new Error("Atendimento não encontrado")
        }

        atendimentoUpdate.dia = dia || atendimentoUpdate.dia
        atendimentoUpdate.hora = hora || atendimentoUpdate.hora
        atendimentoUpdate.valor = valor || atendimentoUpdate.valor
        atendimentoUpdate.status = status || atendimentoUpdate.status

        await atendimentoUpdate.save()
    
    }

    async Delete(id){
        const atendimentoDelete = await Atendimentos.findByPk(id)

        if(!atendimentoDelete){
            throw new Error("Atendimento não encontrado")
        }
        await atendimentoDelete.destroy()

        return atendimentoDelete
    
    }

}

export default new RepositoryAtendimentos()
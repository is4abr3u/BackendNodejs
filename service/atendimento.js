import RepositoryAtendimentos from "../repository/atendimento.js"

class ServiceAtendimentos{
    async Criar(dia, hora, valor, status){
        if(!dia || !hora || !valor || !status){
            throw new Error("Favor informar todos os dados")

        }

        const atendimento = await RepositoryAtendimentos.Create(dia, hora, valor, status)

        return atendimento
    }

    async Buscar(){
        return await RepositoryAtendimentos.FindAll()
    }

    async Detalhe(id){
        if(!id){
            throw new Error("Favor informar o id")

        }

        const atendimento = await RepositoryAtendimentos.FindByPk(id)
        if(!atendimento){
            throw new Error("Id do atendimento não encontrado")
        }

        return atendimento
    }

    async Alterar(id, dia, hora, valor, status){

        if(!id || !dia || !hora || !valor || !status){
            throw new Error("Favor informar os dados")

        }

        const atendimentoAlterado = await RepositoryAtendimentos.Update(id, dia, hora, valor, status)
        return atendimentoAlterado
    }

    async Deletar(id){
        if(!id){
            throw new Error("Favor informar o id")

        }

        const atendimentodeletado = await RepositoryAtendimentos.Delete(id)

        return id
    }
}

export default new ServiceAtendimentos()
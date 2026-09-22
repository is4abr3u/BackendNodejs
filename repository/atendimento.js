import clientes from "../model/clientes.js"

class RepositoryClientes{

    async Create(nome, email, senha){
        const clienteCreate = await clientes.create({nome, email, senha})

        return clienteCreate
    
    }

    async FindAll(){
        const clienteFindAll = await clientes.findAll()

        return clienteFindAll
    
    }

    async FindByPk(id){
        const clienteFindByPk = await clientes.findByPk(id)

        return clienteFindByPk
    
    }

     async Update(id, nome, email, senha){
        const clienteUpdate = await clientes.findByPk(id)

        if(!clienteUpdate){
            throw new Error("Cliente não encontrado")
        }

        usuarioAlterar.nome = nome || usuarioAlterar.nome
        usuarioAlterar.email = email || usuarioAlterar.email
        usuarioAlterar.senha = senha || usuarioAlterar.senha

        await clienteUpdate.save()
    
    }

    async Delete(id){
        const clienteDelete = await clientes.findByPk(id)

        if(!clienteDelete){
            throw new Error("Cliente não encontrado")
        }
        await clienteDelete.destroy()

        return clienteDelete
    
    }

    async FindByEmail(email){
        return usuarios.findOne({ where: {email}})
    }

}

export default new RepositoryClientes()
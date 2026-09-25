import RepositoryClientes from "../repository/clientes.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = "is4Abr3u"

class ServiceClientes{
    async Criar(nome, email, senha){
        if(!nome|| !email|| !senha){
            throw new Error("Favor informar todos os dados")

        }

        const cliente = await RepositoryClientes.Create(nome, email, senha)

        return cliente
    }

    async Buscar(){
        return await RepositoryClientes.FindAll()
    }

    async Detalhe(id){
        if(!id){
            throw new Error("Favor informar o id")

        }

        const cliente = await RepositoryClientes.FindByPk(id)
        if(!cliente){
            throw new Error("Id do cliente não encontrado")
        }

        return cliente
    }

    async Alterar(id, nome, email, senha){

        if(!id || !nome || !email|| !senha){
            throw new Error("Favor informar os dados")

        }

        const clienteAlterado = await RepositoryClientes.Update(id, nome, email, senha)
        return clienteAlterado
    }

    async Deletar(id){
        if(!id){
            throw new Error("Favor informar o id")

        }

        const clientedeletado = await RepositoryClientes.Delete(id)

        return id
    }

     async Login( email, senha) {
        if (!email || !senha) {
            throw new Error("Email e senha inválido")
        }

        const cliente = await RepositoryClientes.FindByEmail(email)

        if (!cliente) {
            throw new Error("Email e senha inválido")
        }

        if (
            !(await bcrypt.compare(String(senha), cliente.senha))
        ){
            throw new Error("Email e senha inválido")
        }

        return jwt.sign(
            {id: cliente.id, email}, 
            segredo, 
            {expiresIn: 60 * 60} 
        )
    }








}

export default new ServiceClientes()
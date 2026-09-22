import express from 'express'
import ControllerClientes from '../controller/clientes.js'

const router= express.Router()


router.get("/criar", ControllerClientes.Criar)
router.get("/buscar", ControllerClientes.Buscar)
router.get("/detalhe", ControllerClientes.Detalhe)
router.get("/alterar", ControllerClientes.Alterar)
router.get("/deletar", ControllerClientes.Deletar)


export default router 
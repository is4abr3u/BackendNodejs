import express from 'express'
import ControllerClientes from '../controller/clientes.js'
import authMiddleware from '../middleware/auth.js'

const router= express.Router()

router.post("/login", ControllerClientes.Login)
router.get("/criar", ControllerClientes.Criar)
router.get("/buscar", authMiddleware, ControllerClientes.Buscar)
router.get("/detalhe/:id", authMiddleware,  ControllerClientes.Detalhe)
router.get("/alterar/:id", authMiddleware, ControllerClientes.Alterar)
router.get("/deletar/:id", authMiddleware, ControllerClientes.Deletar)


export default router 
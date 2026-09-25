import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'

const router= express.Router()


router.get("/criar", ControllerAtendimento.Criar)
router.get("/buscar", ControllerAtendimento.Buscar)
router.get("/detalhe/:id", ControllerAtendimento.Detalhe)
router.get("/alterar/:id", ControllerAtendimento.Alterar)
router.get("/deletar/:id", ControllerAtendimento.Deletar)


export default router 
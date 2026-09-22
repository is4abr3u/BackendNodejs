import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'

const router= express.Router()


router.get("/criar", ControllerAtendimento.Criar)
router.get("/buscar", ControllerAtendimento.Buscar)
router.get("/detalhe", ControllerAtendimento.Detalhe)
router.get("/alterar", ControllerAtendimento.Alterar)
router.get("/deletar", ControllerAtendimento.Deletar)
router.get("/login", ControllerAtendimento.Login)

export default router 
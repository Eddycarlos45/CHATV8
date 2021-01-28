import { Router } from 'express'
import auth from './infra/auth'
import { createUserController } from './UserUseCase'

const router = Router()

router.post('/', (req, res) => {
    createUserController.handle(req, res)
})

router.get('/', (req, res) => {
    res.send({ message: 'gg' })
})

export { router }
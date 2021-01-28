import { Router } from 'express'
import auth from './infra/auth'
import { createUserController, listAllUsersController, loginUserController } from './UserUseCase'

const router = Router()

router.post('/signin', (req, res) => {
    createUserController.handle(req, res)
})

router.get('/', (req, res) => {
    listAllUsersController.handle(req, res)
})

router.post('/login', (req, res) => {
    loginUserController.handle(req, res)
})

export { router }
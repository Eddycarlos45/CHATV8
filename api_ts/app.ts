import express from 'express'
import auth from './infra/auth'
import { router } from './router'

const app = express()

app.use(express.json())
app.use(router)

export { app }
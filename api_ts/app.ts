import express from 'express'
import auth from './infra/auth'
import { router } from './router'
import cors from 'cors'

const app = express()

const options: cors.CorsOptions = {
    methods: "GET,OPTIONS,PUT,POST,DELETE",
    origin: "*"
}

app.use(cors(options))
app.use(express.json())
app.use(router)

export { app }
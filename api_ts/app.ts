import { router } from './router'
import cors from 'cors'
import express from 'express'
import http from 'http'
const app = express()
const socket = require('socket.io')

const options: cors.CorsOptions = {
	methods: "GET,OPTIONS,PUT,POST,DELETE",
	origin: "*"
}

app.use(cors(options))
app.use(express.json())
app.use(router)

const server = http.createServer(app)

const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3001",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: any) => {
	socket.emit("your id", socket.id)
	socket.on("send message", body => {
		io.emit('message', body)
	})
});

export { server }
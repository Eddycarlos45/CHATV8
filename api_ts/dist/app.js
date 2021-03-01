"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
const socket = require('socket.io');
const options = {
    methods: "GET,OPTIONS,PUT,POST,DELETE",
    origin: "*"
};
app.use(cors_1.default(options));
app.use(express_1.default.json());
app.use(router_1.router);
const server = http_1.default.createServer(app);
exports.server = server;
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        io.emit('message', body);
    });
});

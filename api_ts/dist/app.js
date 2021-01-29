"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
exports.app = app;
const options = {
    methods: "GET,OPTIONS,PUT,POST,DELETE",
    origin: "*"
};
app.use(cors_1.default(options));
app.use(express_1.default.json());
app.use(router_1.router);

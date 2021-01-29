"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = __importDefault(require("./infra/db"));
const db = new db_1.default();
db.createConnection();
app_1.app.listen(3050, () => {
    'Server is running';
});

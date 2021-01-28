"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    generateToken(password, email) {
        let payload = {
            iss: "chatv8.net",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            password: password,
            email: email
        };
        var token = jsonwebtoken_1.default.sign(payload, 'batman dark knight');
        return token;
    }
}
exports.Token = Token;

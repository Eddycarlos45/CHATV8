"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = __importDefault(require("./configs"));
class Auth {
    validate(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            jsonwebtoken_1.default.verify(token, configs_1.default.secret, (err, decoded) => {
                if (err) {
                    return res.status(403).send({
                        success: false,
                        message: '403 - invalid token'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            });
        }
    }
}
exports.default = new Auth;

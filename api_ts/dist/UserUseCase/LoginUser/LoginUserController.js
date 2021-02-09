"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
const Token_1 = require("../../utils/Token");
class LoginUserController {
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            try {
                yield this.loginUserUseCase.execute(email, password)
                    .then(user => {
                    if (user.length <= 0) {
                        return response.status(404).send({ message: 'Usuario não encontrado' });
                    }
                    else {
                        const token = new Token_1.Token();
                        return response.status(200).send({ user, token: token.generateToken(email, password) });
                    }
                });
            }
            catch (error) {
                return response.status(400).send({ message: error });
            }
        });
    }
}
exports.LoginUserController = LoginUserController;

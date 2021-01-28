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
exports.CreateUserController = void 0;
const User_1 = require("../../entities/User");
const class_validator_1 = require("class-validator");
class CreateUserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = request.body;
            const user = new User_1.User({
                name,
                email,
                password
            });
            yield class_validator_1.validate(user)
                .then(errors => {
                if (errors.length > 0) {
                    return response.status(400).send({ errors: errors });
                }
            });
            try {
                yield this.userUseCase.execute(user)
                    .then(user => {
                    return response.status(201).send(user);
                });
            }
            catch (error) {
                return response.status(400).send({
                    message: error.message
                });
            }
        });
    }
}
exports.CreateUserController = CreateUserController;

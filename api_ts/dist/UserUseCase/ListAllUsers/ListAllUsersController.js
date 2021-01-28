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
exports.ListAllUsersController = void 0;
class ListAllUsersController {
    constructor(listAllUserUseCase) {
        this.listAllUserUseCase = listAllUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.listAllUserUseCase.execute()
                    .then(users => { return response.status(200).send(users); });
            }
            catch (error) {
                return response.status(400).send({
                    message: error.message
                });
            }
        });
    }
}
exports.ListAllUsersController = ListAllUsersController;

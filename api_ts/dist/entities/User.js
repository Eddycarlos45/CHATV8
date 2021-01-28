"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const class_validator_1 = require("class-validator");
const CustomDecorators_1 = require("../utils/CustomDecorators");
class User {
    constructor(props, id) {
        Object.assign(this, props);
    }
}
__decorate([
    CustomDecorators_1.IsNotBlank("", { message: "Digite um nome por favor" })
], User.prototype, "name", void 0);
__decorate([
    CustomDecorators_1.IsNotBlank("", { message: "Digite um email" }),
    class_validator_1.IsEmail({}, { message: "E-mail inválido" })
], User.prototype, "email", void 0);
__decorate([
    CustomDecorators_1.IsNotBlank("", { message: "Digite uma senha" }),
    CustomDecorators_1.IsPassword("", { message: "A senha não pode conter espaços!" }),
    class_validator_1.MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
    class_validator_1.MaxLength(12, { message: "A senha deve ter no máximo 12 caracteres." })
], User.prototype, "password", void 0);
exports.User = User;

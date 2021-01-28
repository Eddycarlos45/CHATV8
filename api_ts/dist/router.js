"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserUseCase_1 = require("./UserUseCase");
const router = express_1.Router();
exports.router = router;
router.post('/signin', (req, res) => {
    UserUseCase_1.createUserController.handle(req, res);
});
router.get('/', (req, res) => {
    UserUseCase_1.listAllUsersController.handle(req, res);
});
router.post('/login', (req, res) => {
    UserUseCase_1.loginUserController.handle(req, res);
});

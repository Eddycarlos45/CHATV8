"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserUseCase_1 = require("./UserUseCase");
const router = express_1.Router();
exports.router = router;
router.post('/', (req, res) => {
    UserUseCase_1.createUserController.handle(req, res);
});
router.get('/', (req, res) => {
    res.send({ message: 'gg' });
});

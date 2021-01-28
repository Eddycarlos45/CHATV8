"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.loginUserUseCase = exports.listAllUsersController = exports.listAllUserUseCase = exports.createUserController = exports.createUserUseCase = void 0;
const MongoUsersRepository_1 = require("../repositories/implementation/MongoUsersRepository");
const CreateUserController_1 = require("./CreateUser/CreateUserController");
const CreateUserUseCase_1 = require("./CreateUser/CreateUserUseCase");
const ListAllUsersController_1 = require("./ListAllUsers/ListAllUsersController");
const ListAllUsersUseCase_1 = require("./ListAllUsers/ListAllUsersUseCase");
const LoginUserController_1 = require("./LoginUser/LoginUserController");
const LoginUserUseCase_1 = require("./LoginUser/LoginUserUseCase");
const mongoUsersRepository = new MongoUsersRepository_1.MongoUsersRepository();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(mongoUsersRepository);
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
const listAllUserUseCase = new ListAllUsersUseCase_1.ListAllUserUseCase(mongoUsersRepository);
exports.listAllUserUseCase = listAllUserUseCase;
const listAllUsersController = new ListAllUsersController_1.ListAllUsersController(listAllUserUseCase);
exports.listAllUsersController = listAllUsersController;
const loginUserUseCase = new LoginUserUseCase_1.LoginUserUseCase(mongoUsersRepository);
exports.loginUserUseCase = loginUserUseCase;
const loginUserController = new LoginUserController_1.LoginUserController(loginUserUseCase);
exports.loginUserController = loginUserController;

import { MongoUsersRepository } from "../repositories/implementation/MongoUsersRepository";
import { CreateUserController } from "./CreateUser/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { ListAllUsersController } from "./ListAllUsers/ListAllUsersController";
import { ListAllUserUseCase } from "./ListAllUsers/ListAllUsersUseCase";
import { LoginUserController } from "./LoginUser/LoginUserController";
import { LoginUserUseCase } from "./LoginUser/LoginUserUseCase";

const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    mongoUsersRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

const listAllUserUseCase = new ListAllUserUseCase(
    mongoUsersRepository
)

const listAllUsersController = new ListAllUsersController(
    listAllUserUseCase
)

const loginUserUseCase = new LoginUserUseCase(
    mongoUsersRepository
)

const loginUserController = new LoginUserController(
    loginUserUseCase
)


export {
    createUserUseCase,
    createUserController,
    listAllUserUseCase,
    listAllUsersController,
    loginUserUseCase,
    loginUserController
}


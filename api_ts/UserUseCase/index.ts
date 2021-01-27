import { MongoUsersRepository } from "../repositories/implementation/MongoUsersRepository";
import { CreateUserController } from "./CreateUser/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";

const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    mongoUsersRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }


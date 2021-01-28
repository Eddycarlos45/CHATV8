import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import UserRepository from "../UserRepository";

export class MongoUsersRepository implements IUserRepository {


    async save(user: User): Promise<User> {
        try {
            await UserRepository.create(user)
            return user
        } catch (error) {
            console.log(error)
        }
    }

    async list() {
        return UserRepository.find({})
    }

    async login(email: string, password: string) {
        return await UserRepository.find({ 'email': email, 'password': password })
    }
}

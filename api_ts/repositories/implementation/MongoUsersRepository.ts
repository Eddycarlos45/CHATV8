import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import UserRepository from "../UserRepository";

export class MongoUsersRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        UserRepository.create(user)
    }
}

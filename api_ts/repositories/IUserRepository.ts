import { User } from "../entities/User";

export interface IUserRepository {
    save(user: User): Promise<User>
    list()
    login(email: string, password: string)
}
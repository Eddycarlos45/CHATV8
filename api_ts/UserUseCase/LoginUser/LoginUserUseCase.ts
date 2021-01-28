import { IUserRepository } from "../../repositories/IUserRepository";

export class LoginUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(email: string, password: string) {
        return await this.userRepository.login(email, password)
    }
}
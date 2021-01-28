import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO';
export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const user = new User(data)
        return await this.userRepository.save(user)
    }
}
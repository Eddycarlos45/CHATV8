import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {

    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<void> {

    }
}
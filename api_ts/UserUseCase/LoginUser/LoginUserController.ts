import { LoginUserUseCase } from "./LoginUserUseCase";
import { Response, Request } from "express"
import { Token } from "../../utils/Token";

export class LoginUserController {

    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        try {
            await this.loginUserUseCase.execute(email, password)
                .then(user => {
                    if (user.length <= 0) {
                        return response.status(404).send({ message: 'Usuario não encontrado' })
                    } else {
                        const token = new Token()
                        return response.status(200).send({ user, token: token.generateToken(email, password) })
                    }
                })
        } catch (error) {
            return response.status(400).send({ message: error })
        }

    }
}
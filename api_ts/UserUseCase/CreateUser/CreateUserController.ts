import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express"

export class CreateUserController {

    constructor(
        private userUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            await this.userUseCase.execute({
                name,
                email,
                password
            })
                .then(user => {
                    return response.status(201).send(user)
                })
        } catch (error) {
            return response.status(400).send({
                message: error.message
            })
        }
    }
}
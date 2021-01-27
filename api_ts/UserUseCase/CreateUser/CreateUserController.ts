import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express"

export class CreateUserController {

    constructor(
        private userUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            this.userUseCase.execute({
                name,
                email,
                password
            })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).send({
                message: error.message
            })
        }
    }
}
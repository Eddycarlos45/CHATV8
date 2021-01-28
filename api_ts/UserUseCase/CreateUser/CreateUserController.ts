import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express"
import { User } from "../../entities/User";
import { validate } from "class-validator";

export class CreateUserController {

    constructor(
        private userUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        const user = new User({
            name,
            email,
            password
        })
        await validate(user)
            .then(errors => {
                if (errors.length > 0) {
                    return response.status(400).send({ errors: errors })
                }
            })

        try {
            await this.userUseCase.execute(user)
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
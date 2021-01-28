import { User } from "../../entities/User";
import { ListAllUserUseCase } from "./ListAllUsersUseCase";
import { Request, Response } from 'express'

export class ListAllUsersController {

    constructor(
        private listAllUserUseCase: ListAllUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.listAllUserUseCase.execute()
                .then(users => { return response.status(200).send(users) })
        } catch (error) {
            return response.status(400).send({
                message: error.message
            })
        }
    }
}
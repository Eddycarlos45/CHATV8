import { IsEmail, MaxLength, MinLength } from "class-validator";
import { IsNotBlank, IsPassword } from "../utils/CustomDecorators";


export class User {
    public readonly id: string;

    @IsNotBlank("", { message: "Digite um nome por favor" })
    public name: string;

    @IsNotBlank("", { message: "Digite um email" })
    @IsEmail({}, { message: "E-mail inválido" })
    public email: string;

    @IsNotBlank("", { message: "Digite uma senha" })
    @IsPassword("", { message: "A senha não pode conter espaços!" })
    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres." })
    @MaxLength(12, { message: "A senha deve ter no máximo 12 caracteres." })
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)
    }
}
import jwt from 'jsonwebtoken'

export class Token {

    generateToken(password: string, email: string) {
        let payload = {
            iss: "chatv8.net",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            password: password,
            email: email
        }

        var token = jwt.sign(payload, 'batman dark knight')
        return token
    }
}


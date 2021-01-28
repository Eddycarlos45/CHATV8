import jwt from 'jsonwebtoken'
import configs from './configs'

class Auth {

    validate(req, res, next) {
        var token = req.headers['x-access-token']

        if (token) {
            jwt.verify(token, configs.secret, (err, decoded) => {
                if (err) {
                    return res.status(403).send({
                        success: false,
                        message: '403 - invalid token'
                    })
                } else {
                    next()
                }
            })
        } else {
            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            })
        }
    }
}

export default new Auth
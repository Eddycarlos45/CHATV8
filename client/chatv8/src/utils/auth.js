import axios from 'axios'

export const login = (usuario) => {

    return new Promise((resolve, reject) => {
        const authUser = { email: usuario.email, password: usuario.senha }

        axios.post('http://localhost:5000/login', authUser)
            .then(res => {
                return resolve(res)
            })
            .catch(err => {
                return reject(err)
            })
    })
}


export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null
}
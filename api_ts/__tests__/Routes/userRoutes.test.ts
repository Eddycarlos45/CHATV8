import { server } from "../../app";
const request = require('supertest')

describe('Routes', () => {
    test('should create a student', async () => {
        const response = await request(server)
            .post('/signup')
            .send({
                name: 'test',
                email: 'test2@email.com',
                password: 'test123'
            })
   
        expect(response.status).toBe(201);
    })
})
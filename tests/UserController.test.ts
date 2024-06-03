import request from 'supertest';
import app from '../src/app'; // Impor aplikasi Express

describe('User Controller', () => {
    it('should get all users', async () => {
        const res = await request(app).get('/api/users'); // Gunakan request(app) untuk menyatakan aplikasi Express
        expect(res.statusCode).toEqual(200);
    });

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe', email: 'john@example.com', password: 'password' });
        expect(res.statusCode).toEqual(201);
    });
});

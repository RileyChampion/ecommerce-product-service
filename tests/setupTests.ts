
import app from '../src/app';
import http from 'http';

let server: http.Server;

beforeAll(() => {
    server = app.listen(8080, () => {
        console.log(`[server]: Server is running`);
    });
})

afterAll((done) => {
    server.close(done);
})
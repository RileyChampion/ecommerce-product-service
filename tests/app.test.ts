import request from 'supertest';
import app from '../src/app';

describe('GET /api/livecheck', () => {
  it('should return a message', async () => {
    const res = await request(app).get('/api/livecheck');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('API is alive...');
  });
});
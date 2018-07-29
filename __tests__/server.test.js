import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import app from '../src/server';

describe('requests', () => {
  beforeAll(() => {
    jasmine.addMatchers(matchers);
  });

  it('GET /', async () => {
    const res = await request(app)
      .get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST', async () => {
    const res = await request(app)
      .post('/todo/new');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET index', async () => {
    const res = await request(app)
      .get('/todos');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /todo', async () => {
    const res = await request(app)
      .get('/todo/1');
    expect(res).toHaveHTTPStatus(200);
    const res2 = await request(app)
      .get('/todo/9999');
    expect(res2).toHaveHTTPStatus(404);
  });

  it('DELETE', async () => {
    await request(app).delete('/todo/1');
    const res1 = await request(app)
      .get('/todo/9999');
    expect(res1).toHaveHTTPStatus(404);
    const res2 = await request(app)
      .get('/todo/1');
    expect(res2).toHaveHTTPStatus(404);
  });
});

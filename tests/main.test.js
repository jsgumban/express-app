// test/main.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
	it('should return a 200 status code and a greeting message', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
		expect(response.text).toBe('Hello, Docker + GitHub Actions!');
	});
});
